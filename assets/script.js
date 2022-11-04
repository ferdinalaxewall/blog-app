$(document).ready(function(){
    const arrayArticle = getAllArticle();

    arrayArticle.map((article) => {
        const articleHtml = `<article class="article-card">
                                <img src="./assets/img/article/${article.image}" alt="${article.title}" class="article-img" loading="lazy">
                                <div class="article-header">
                                    <a href="/article.html?article=${article.id}" class="article-title" title="${article.title}">
                                        ${article.title}
                                    </a>
                                    <h5 class="article-date">
                                        ${article.date}
                                    </h5>
                                </div>
                                <p class="article-body">
                                    ${article.content[0].description[0]}
                                </p>
                            </article>`

        $(".article-group").append(articleHtml)
    })
});

$(window).scroll(function(){
    let windowScroll = $(this).scrollTop();

    if(windowScroll > 100){
        $(".navbar").attr("data-scroll", "on");
    }else{
        $(".navbar").attr("data-scroll", "off");
    }
});