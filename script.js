"use strict";
$(document).ready(() => {


    $.get("https://www.reddit.com/r/ArchitecturePorn.json", (response) => {
        const children = response.data.children;
        for (let i = 0; i <= 9; i++) {
            console.log(children);
            $("body").append(`
                <section class="box">
                     <h3 class ="title"> Title: ${children[i].data.title} </h3>
                     <img src="${children[i].data.preview.images["0"].source.url}" >
                     <a href="${children["0"].data.url}">Link</a>
                </section>
                 `)
        };

    });










});
