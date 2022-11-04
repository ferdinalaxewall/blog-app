$(document).ready(function(){
    
    const urlParams = new URLSearchParams(window.location.search);
    let articleParams = urlParams.get("article");
    const arrayArticleId = getArticleById(articleParams);
    const arrayAnotherArticle = getAnotherArticle(articleParams)

    if(arrayArticleId){
        createDetailArticle(arrayArticleId);
        createAnotherArticle(arrayAnotherArticle);   
    }else{ 
        window.location.href = "index.html"
    }
})

function createAnotherArticle(article){
    article.map(data => {
        const anotherArticleHtml = `<article class="sticky-card">
                    <a href="article.html?article=${data.id}" class="sticky-title" title="${data.title}">
                        ${data.title}
                    </a>
                    <p class="sticky-body">
                        ${data.content[0].description[0]}
                    </p>
                </article>`

        $(".sticky-content").append(anotherArticleHtml)
    })
}

function createDetailArticle(article){

    async function createMain(){
        await new Promise(mainPromise => {
            article.map(data => {
                const detailArticleHtml = `<article class="article-content">
                                            <div class="article-content-header">
                                                <h1 class="content-title">${data.title}</h1>
                                                <h5 class="content-date">${data.date}</h5>
                                                <img src="./assets/img/article/${data.image}" class="article-content-image" alt="${data.title}" loading="lazy">
                                            </div>
                                        </article>`
        
                $("#article-content-container").append(detailArticleHtml)
            })
            mainPromise();
        })

        async function createContent(){
            await new Promise(contentPromise => {
                article.map(data => {
                    data.content.map(content => {
                        const contentPointHtml = createDetailContent(content.title, content.description)
                        // console.log(content.title, content.description)
    
                        $(".article-content").append(contentPointHtml)
                    })
                })
                
                contentPromise();
            })
        }
        createContent();
    }

    createMain()
}

function createDetailContent(title, description){
    let contentHtml = `<div class="content-point-group">
                            <h3 class="point-title">${title}</h3>`

    description.map(desc => {
        if(desc.indexOf("=>") > -1){
            const splitedString = desc.split("=>")
            if (splitedString[0] == "link") {
                contentHtml += `<iframe src="" id="frame-code" style="border:none;width:100%; height:420px;"></iframe>`
                setTimeout(() => {
                    $("#frame-code").attr("src", splitedString[1]);
                }, 10);
            }else if(splitedString[0] == "image"){
                contentHtml += `<img src="./assets/img/article/${splitedString[1]}" alt="${title}" loading="lazy">`
            }else if(splitedString[0] == "syntax"){
                contentHtml += `<code>${splitedString[1]}</code>`
            }
        }else if(desc.indexOf("--") > -1){
            contentHtml += "<ul>"
            const splitedString = desc.split("--")
            contentHtml += `<li>${splitedString[1]}</li>`
            contentHtml += "</ul>"
        }else{
            contentHtml += `<p class="point-description">${desc}</p>`
        }
    })
    
    contentHtml += `</div>`
    
    return contentHtml
}