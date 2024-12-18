.float-left {
    float: left
}

.float-right {
    float: right
}

.clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
    zoom:1}

html {
    box-sizing: border-box
}

@media only screen and (max-width: 600px) {
    html {
        font-size:13px
    }
}

*,:after,:before {
    box-sizing: inherit
}

html {
    color: #555;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    text-rendering: optimizelegibility
}

#panel {
    background: #edf0f2
}

article,aside,blockquote,body,button,code,dd,details,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hr,input,legend,li,menu,nav,ol,p,pre,section,td,textarea,th,ul {
    margin: 0;
    padding: 0
}

dt {
    line-height: 1.8;
    color: #888
}

dd {
    margin-bottom: .625rem
}

@media only screen and (min-width: 1000px) {
    dl.large.horizontal {
        overflow:hidden
    }

    dl.large.horizontal dt {
        float: left;
        width: 37%;
        overflow: hidden;
        clear: left;
        text-align: left;
        text-overflow: ellipsis;
        white-space: nowrap;
        box-sizing: border-box;
        padding-right: .625rem
    }

    dl.large.horizontal dd {
        float: left;
        width: 62%
    }

    dl.large.horizontal dd,dl.large.horizontal dt {
        line-height: 1.2rem;
        margin: .3125rem 0
    }
}

article,aside,details,figcaption,figure,footer,header,menu,nav,section {
    display: block
}

audio,canvas,video {
    display: inline-block
}

body {
    font-family: Open Sans,Seravek,Segoe UI,Verdana,PingFang SC,Hiragino Sans GB,Lantinghei SC,Microsoft Yahei,WenQuanYi Micro Hei,sans;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1
}

table {
    border-collapse: collapse;
    border-spacing: 0
}

fieldset,img {
    border: 0
}

blockquote {
    position: relative;
    color: #999;
    font-weight: 400;
    border-left: 3px solid #ddd;
    padding: 1rem;
    margin: .5rem 0 1rem;
    font-size: 14px
}

blockquote:before {
    display: block;
    margin-bottom: .6rem
}

blockquote.note {
    border-color: #5f9fd6;
    background: #f8f8f8;
    color: #666
}

blockquote.note:before {
    content: "NOTE:";
    color: #5f9fd6
}

blockquote.warn {
    border-color: #ff4136;
    background: #f8f8f8;
    color: #666
}

blockquote.warn:before {
    content: "WARNING:";
    color: #ff4136
}

abbr,acronym {
    border-bottom: 1px dotted;
    font-variant: normal
}

abbr {
    cursor: help
}

del {
    text-decoration: line-through
}

address,caption,cite,th,var {
    font-style: normal;
    font-weight: 400
}

ol,ul {
    list-style: none
}

caption,th {
    text-align: left
}

q:after,q:before {
    content: ""
}

sub,sup {
    font-size: 75%;
    line-height: 0;
    position: relative
}

:root sub,:root sup {
    vertical-align: baseline
}

sup {
    top: -.5em
}

sub {
    bottom: -.25em
}

.link,.link:active,.link:hover,.link:visited,a,a:active,a:hover,a:visited {
    color: #555
}

.link:hover,a:hover {
    text-decoration: underline
}

.link,a,ins {
    text-decoration: none
}

.typo-u,u {
    text-decoration: underline
}

.supplementary {
    font-size: .875rem;
    line-height: 1;
    color: #aaa
}

.supplementary a,.supplementary a:hover,.supplementary a:visited {
    color: #999
}

.supplementary.list li {
    display: inline-block;
    margin-right: .9375rem;
    vertical-align: middle
}

.supplementary.dot.list li {
    margin-right: 0
}

.supplementary.dot.list li:after {
    display: inline-block;
    content: "·";
    margin: 0 .3125rem
}

.supplementary.dot.list li:last-child:after {
    display: none
}

.supplementary.inverse,.supplementary.inverse a,.supplementary.inverse a:hover,.supplementary.inverse a:visited {
    color: hsla(0,0%,97.3%,.8)
}

.group-list__item {
    margin-bottom: 1rem
}

.group-list__item:last-child {
    margin-bottom: 0
}

.chip-list__item {
    line-height: 1.5;
    display: inline-block;
    margin-right: .5rem
}

mark {
    background: #fffdd1;
    border-bottom: 1px solid #ffedce;
    padding: .125rem;
    margin: 0 .3125rem
}

.monospace,code,pre,pre tt {
    font-family: monaco,Source Code Pro,Consolas,Lucida Console,"monospace"
}

pre {
    background: none;
    border: 0;
    display: block;
    white-space: pre-wrap;
    overflow: auto;
    overflow-wrap: break-word;
    word-wrap: break-word;
    -ms-word-break: break-all;
    word-break: break-word;
    -ms-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto
}

hr {
    border: none;
    border-bottom: 1px solid #cfcfcf;
    margin-bottom: .8em;
    height: 10px
}

figcaption,small {
    font-size: .9em;
    color: #888
}

.typo {
    overflow-wrap: break-word;
    word-wrap: break-word;
    -ms-word-break: break-all;
    word-break: break-word;
    -ms-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto
}

.typo-a,.typo-a:active,.typo-a:hover,.typo-a:visited,.typo .link,.typo .link:active,.typo .link:hover,.typo .link:visited,.typo a,.typo a:active,.typo a:hover,.typo a:visited {
    color: #5f9fd6
}

.typo dl,.typo form,.typo hr,.typo p,.typo table {
    padding-top: .3em;
    padding-bottom: .3em
}

.typo li,.typo ol {
    padding-top: .25em;
    padding-bottom: .25em
}

.typo p {
    line-height: 1.5;
    font-size: inherit
}

h1,h2,h3,h4,h5,h6 {
    font-family: Open Sans,Seravek,Segoe UI,Verdana,PingFang SC,Lantinghei SC,Microsoft Yahei,Hiragino Sans GB,"Microsoft Sans Serif",WenQuanYi Micro Hei,"sans-serif";
    font-weight: 300;
    color: #3d3d3d;
    line-height: 1.1
}

.typo h1,.typo h2,.typo h3,.typo h4,.typo h5,.typo h6 {
    margin-top: 1em;
    margin-bottom: .6em;
    line-height: 1.1
}

.typo h1 {
    font-size: 1.8em
}

.typo h2 {
    font-size: 1.4em
}

.typo h3 {
    font-size: 1.17em
}

.typo h4,.typo h5,.typo h6 {
    font-size: 1em
}

.typo ul {
    margin-left: 1.3em;
    list-style: square
}

.no-heading h1,.no-heading h2,.no-heading h3,.no-heading h4,.no-heading h5,.no-heading h6 {
    padding-top: .3em;
    padding-bottom: .3em;
    font-size: inherit;
    font-weight: 400;
    line-height: 1;
    margin: .6em 0 0
}

.typo ol {
    list-style: decimal;
    margin-left: 1.9em
}

.typo li ol,.typo li ul {
    margin-top: 1.2em;
    margin-bottom: 1.2em;
    margin-left: 2em
}

.typo li ul {
    list-style: circle
}

.typo table caption,.typo table td,.typo table th {
    border: 1px solid #ddd;
    padding: .5em 1em;
    color: #666
}

.typo table th {
    background: #fbfbfb
}

.typo table thead th {
    background: #f1f1f1
}

.typo table caption {
    border-bottom: none
}

.typo img {
    max-width: 100%
}

.text-aqua {
    color: #7fdbff
}

.text-aqua.lighter {
    color: #b2e9ff
}

.text-aqua.darker {
    color: #00a5e5
}

.text-blue {
    color: #0074d9
}

.text-blue.lighter {
    color: #4fadff
}

.text-blue.darker {
    color: #004682
}

.text-navy {
    color: #001f3f
}

.text-navy.lighter {
    color: #0077f2
}

.text-navy.darker {
    color: #001326
}

.text-teal {
    color: #39cccc
}

.text-teal.lighter {
    color: #88e0e0
}

.text-teal.darker {
    color: #207d7d
}

.text-green {
    color: #2ecc40
}

.text-green.lighter {
    color: #80e28b
}

.text-green.darker {
    color: #1c7a26
}

.text-olive {
    color: #3d9970
}

.text-olive.lighter {
    color: #80ccaa
}

.text-olive.darker {
    color: #255c43
}

.text-lime {
    color: #01ff70
}

.text-lime.lighter {
    color: #67ffa9
}

.text-lime.darker {
    color: #009a43
}

.text-yellow {
    color: #ffdc00
}

.text-yellow.lighter {
    color: #ffea66
}

.text-yellow.darker {
    color: #998400
}

.text-orange {
    color: #ff851b
}

.text-orange.lighter {
    color: #ffb676
}

.text-orange.darker {
    color: #a94f00
}

.text-red {
    color: #ff4136
}

.text-red.lighter {
    color: #ff8d86
}

.text-red.darker {
    color: #b90a00
}

.text-fuchsia {
    color: #f012be
}

.text-fuchsia.lighter {
    color: #f671d8
}

.text-fuchsia.darker {
    color: #920973
}

.text-purple {
    color: #b10dc9
}

.text-purple.lighter {
    color: #e058f4
}

.text-purple.darker {
    color: #6a0879
}

.text-maroon {
    color: #85144b
}

.text-maroon.lighter {
    color: #e34592
}

.text-maroon.darker {
    color: #500c2d
}

.text-white,.text-white.lighter {
    color: #fff
}

.text-white.darker {
    color: #999
}

.text-silver {
    color: #ddd
}

.text-silver.lighter {
    color: #ebebeb
}

.text-silver.darker {
    color: #858585
}

.text-gray {
    color: #aaa
}

.text-gray.lighter {
    color: #ccc
}

.text-gray.darker {
    color: #666
}

.text-black {
    color: #111
}

.text-black.lighter {
    color: #707070
}

.text-black.darker {
    color: #0a0a0a
}

.text-center {
    text-align: center
}

.text-right {
    text-align: right
}

.text-left {
    text-align: left
}

.text-justify {
    text-align: justify
}

.row {
    margin-left: auto;
    margin-right: auto
}

@media only screen and (min-width: 1000px) {
    .row {
        max-width:980px
    }
}

@media only screen and (min-width: 1250px) {
    .row {
        max-width:1200px
    }
}

.row:after,.row:before {
    content: " ";
    display: table
}

.row:after {
    clear: both
}

.row.collapse>.column,.row.collapse>.columns {
    padding-left: 0;
    padding-right: 0
}

.row .row {
    max-width: none;
    margin-left: -.9375rem;
    margin-right: -.9375rem
}

.row .row.collapse {
    margin-left: 0;
    margin-right: 0
}

.row.expanded {
    max-width: none
}

.row.expanded .row {
    margin-left: auto;
    margin-right: auto
}

.column,.columns {
    width: 100%;
    float: left;
    padding-left: .9375rem;
    padding-right: .9375rem
}

.column:last-child:not(:first-child),.columns:last-child:not(:first-child) {
    float: right
}

.column.end:last-child:last-child,.end.columns:last-child:last-child {
    float: left
}

.column.row.row,.row.row.columns {
    float: none
}

.row .column.row.row,.row .row.row.columns {
    padding-left: 0;
    padding-right: 0;
    margin-left: 0;
    margin-right: 0
}

.small-1 {
    width: 8.33333%
}

.small-push-1 {
    position: relative;
    left: 8.33333%
}

.small-pull-1 {
    position: relative;
    left: -8.33333%
}

.small-offset-0 {
    margin-left: 0
}

.small-2 {
    width: 16.66667%
}

.small-push-2 {
    position: relative;
    left: 16.66667%
}

.small-pull-2 {
    position: relative;
    left: -16.66667%
}

.small-offset-1 {
    margin-left: 8.33333%
}

.small-3 {
    width: 25%
}

.small-push-3 {
    position: relative;
    left: 25%
}

.small-pull-3 {
    position: relative;
    left: -25%
}

.small-offset-2 {
    margin-left: 16.66667%
}

.small-4 {
    width: 33.33333%
}

.small-push-4 {
    position: relative;
    left: 33.33333%
}

.small-pull-4 {
    position: relative;
    left: -33.33333%
}

.small-offset-3 {
    margin-left: 25%
}

.small-5 {
    width: 41.66667%
}

.small-push-5 {
    position: relative;
    left: 41.66667%
}

.small-pull-5 {
    position: relative;
    left: -41.66667%
}

.small-offset-4 {
    margin-left: 33.33333%
}

.small-6 {
    width: 50%
}

.small-push-6 {
    position: relative;
    left: 50%
}

.small-pull-6 {
    position: relative;
    left: -50%
}

.small-offset-5 {
    margin-left: 41.66667%
}

.small-7 {
    width: 58.33333%
}

.small-push-7 {
    position: relative;
    left: 58.33333%
}

.small-pull-7 {
    position: relative;
    left: -58.33333%
}

.small-offset-6 {
    margin-left: 50%
}

.small-8 {
    width: 66.66667%
}

.small-push-8 {
    position: relative;
    left: 66.66667%
}

.small-pull-8 {
    position: relative;
    left: -66.66667%
}

.small-offset-7 {
    margin-left: 58.33333%
}

.small-9 {
    width: 75%
}

.small-push-9 {
    position: relative;
    left: 75%
}

.small-pull-9 {
    position: relative;
    left: -75%
}

.small-offset-8 {
    margin-left: 66.66667%
}

.small-10 {
    width: 83.33333%
}

.small-push-10 {
    position: relative;
    left: 83.33333%
}

.small-pull-10 {
    position: relative;
    left: -83.33333%
}

.small-offset-9 {
    margin-left: 75%
}

.small-11 {
    width: 91.66667%
}

.small-push-11 {
    position: relative;
    left: 91.66667%
}

.small-pull-11 {
    position: relative;
    left: -91.66667%
}

.small-offset-10 {
    margin-left: 83.33333%
}

.small-12 {
    width: 100%
}

.small-offset-11 {
    margin-left: 91.66667%
}

.small-up-1>.column,.small-up-1>.columns {
    width: 100%;
    float: left
}

.small-up-1>.column:nth-of-type(1n),.small-up-1>.columns:nth-of-type(1n) {
    clear: none
}

.small-up-1>.column:nth-of-type(1n+1),.small-up-1>.columns:nth-of-type(1n+1) {
    clear: both
}

.small-up-1>.column:last-child,.small-up-1>.columns:last-child {
    float: left
}

.small-up-2>.column,.small-up-2>.columns {
    width: 50%;
    float: left
}

.small-up-2>.column:nth-of-type(1n),.small-up-2>.columns:nth-of-type(1n) {
    clear: none
}

.small-up-2>.column:nth-of-type(odd),.small-up-2>.columns:nth-of-type(odd) {
    clear: both
}

.small-up-2>.column:last-child,.small-up-2>.columns:last-child {
    float: left
}

.small-up-3>.column,.small-up-3>.columns {
    width: 33.33333%;
    float: left
}

.small-up-3>.column:nth-of-type(1n),.small-up-3>.columns:nth-of-type(1n) {
    clear: none
}

.small-up-3>.column:nth-of-type(3n+1),.small-up-3>.columns:nth-of-type(3n+1) {
    clear: both
}

.small-up-3>.column:last-child,.small-up-3>.columns:last-child {
    float: left
}

.small-up-4>.column,.small-up-4>.columns {
    width: 25%;
    float: left
}

.small-up-4>.column:nth-of-type(1n),.small-up-4>.columns:nth-of-type(1n) {
    clear: none
}

.small-up-4>.column:nth-of-type(4n+1),.small-up-4>.columns:nth-of-type(4n+1) {
    clear: both
}

.small-up-4>.column:last-child,.small-up-4>.columns:last-child {
    float: left
}

.small-up-5>.column,.small-up-5>.columns {
    width: 20%;
    float: left
}

.small-up-5>.column:nth-of-type(1n),.small-up-5>.columns:nth-of-type(1n) {
    clear: none
}

.small-up-5>.column:nth-of-type(5n+1),.small-up-5>.columns:nth-of-type(5n+1) {
    clear: both
}

.small-up-5>.column:last-child,.small-up-5>.columns:last-child {
    float: left
}

.small-up-6>.column,.small-up-6>.columns {
    width: 16.66667%;
    float: left
}

.small-up-6>.column:nth-of-type(1n),.small-up-6>.columns:nth-of-type(1n) {
    clear: none
}

.small-up-6>.column:nth-of-type(6n+1),.small-up-6>.columns:nth-of-type(6n+1) {
    clear: both
}

.small-up-6>.column:last-child,.small-up-6>.columns:last-child {
    float: left
}

.small-up-7>.column,.small-up-7>.columns {
    width: 14.28571%;
    float: left
}

.small-up-7>.column:nth-of-type(1n),.small-up-7>.columns:nth-of-type(1n) {
    clear: none
}

.small-up-7>.column:nth-of-type(7n+1),.small-up-7>.columns:nth-of-type(7n+1) {
    clear: both
}

.small-up-7>.column:last-child,.small-up-7>.columns:last-child {
    float: left
}

.small-up-8>.column,.small-up-8>.columns {
    width: 12.5%;
    float: left
}

.small-up-8>.column:nth-of-type(1n),.small-up-8>.columns:nth-of-type(1n) {
    clear: none
}

.small-up-8>.column:nth-of-type(8n+1),.small-up-8>.columns:nth-of-type(8n+1) {
    clear: both
}

.small-up-8>.column:last-child,.small-up-8>.columns:last-child {
    float: left
}

.small-collapse>.column,.small-collapse>.columns {
    padding-left: 0;
    padding-right: 0
}

.expanded.row .small-collapse.row,.small-collapse .row {
    margin-left: 0;
    margin-right: 0
}

.small-uncollapse>.column,.small-uncollapse>.columns {
    padding-left: .9375rem;
    padding-right: .9375rem
}

.small-centered {
    float: none;
    margin-left: auto;
    margin-right: auto
}

.small-pull-0,.small-push-0,.small-uncentered {
    position: static;
    margin-left: 0;
    margin-right: 0;
    float: left
}

@media only screen and (min-width: 600px) {
    .medium-1 {
        width:8.33333%
    }

    .medium-push-1 {
        position: relative;
        left: 8.33333%
    }

    .medium-pull-1 {
        position: relative;
        left: -8.33333%
    }

    .medium-offset-0 {
        margin-left: 0
    }

    .medium-2 {
        width: 16.66667%
    }

    .medium-push-2 {
        position: relative;
        left: 16.66667%
    }

    .medium-pull-2 {
        position: relative;
        left: -16.66667%
    }

    .medium-offset-1 {
        margin-left: 8.33333%
    }

    .medium-3 {
        width: 25%
    }

    .medium-push-3 {
        position: relative;
        left: 25%
    }

    .medium-pull-3 {
        position: relative;
        left: -25%
    }

    .medium-offset-2 {
        margin-left: 16.66667%
    }

    .medium-4 {
        width: 33.33333%
    }

    .medium-push-4 {
        position: relative;
        left: 33.33333%
    }

    .medium-pull-4 {
        position: relative;
        left: -33.33333%
    }

    .medium-offset-3 {
        margin-left: 25%
    }

    .medium-5 {
        width: 41.66667%
    }

    .medium-push-5 {
        position: relative;
        left: 41.66667%
    }

    .medium-pull-5 {
        position: relative;
        left: -41.66667%
    }

    .medium-offset-4 {
        margin-left: 33.33333%
    }

    .medium-6 {
        width: 50%
    }

    .medium-push-6 {
        position: relative;
        left: 50%
    }

    .medium-pull-6 {
        position: relative;
        left: -50%
    }

    .medium-offset-5 {
        margin-left: 41.66667%
    }

    .medium-7 {
        width: 58.33333%
    }

    .medium-push-7 {
        position: relative;
        left: 58.33333%
    }

    .medium-pull-7 {
        position: relative;
        left: -58.33333%
    }

    .medium-offset-6 {
        margin-left: 50%
    }

    .medium-8 {
        width: 66.66667%
    }

    .medium-push-8 {
        position: relative;
        left: 66.66667%
    }

    .medium-pull-8 {
        position: relative;
        left: -66.66667%
    }

    .medium-offset-7 {
        margin-left: 58.33333%
    }

    .medium-9 {
        width: 75%
    }

    .medium-push-9 {
        position: relative;
        left: 75%
    }

    .medium-pull-9 {
        position: relative;
        left: -75%
    }

    .medium-offset-8 {
        margin-left: 66.66667%
    }

    .medium-10 {
        width: 83.33333%
    }

    .medium-push-10 {
        position: relative;
        left: 83.33333%
    }

    .medium-pull-10 {
        position: relative;
        left: -83.33333%
    }

    .medium-offset-9 {
        margin-left: 75%
    }

    .medium-11 {
        width: 91.66667%
    }

    .medium-push-11 {
        position: relative;
        left: 91.66667%
    }

    .medium-pull-11 {
        position: relative;
        left: -91.66667%
    }

    .medium-offset-10 {
        margin-left: 83.33333%
    }

    .medium-12 {
        width: 100%
    }

    .medium-offset-11 {
        margin-left: 91.66667%
    }

    .medium-up-1>.column,.medium-up-1>.columns {
        width: 100%;
        float: left
    }

    .medium-up-1>.column:nth-of-type(1n),.medium-up-1>.columns:nth-of-type(1n) {
        clear: none
    }

    .medium-up-1>.column:nth-of-type(1n+1),.medium-up-1>.columns:nth-of-type(1n+1) {
        clear: both
    }

    .medium-up-1>.column:last-child,.medium-up-1>.columns:last-child {
        float: left
    }

    .medium-up-2>.column,.medium-up-2>.columns {
        width: 50%;
        float: left
    }

    .medium-up-2>.column:nth-of-type(1n),.medium-up-2>.columns:nth-of-type(1n) {
        clear: none
    }

    .medium-up-2>.column:nth-of-type(odd),.medium-up-2>.columns:nth-of-type(odd) {
        clear: both
    }

    .medium-up-2>.column:last-child,.medium-up-2>.columns:last-child {
        float: left
    }

    .medium-up-3>.column,.medium-up-3>.columns {
        width: 33.33333%;
        float: left
    }

    .medium-up-3>.column:nth-of-type(1n),.medium-up-3>.columns:nth-of-type(1n) {
        clear: none
    }

    .medium-up-3>.column:nth-of-type(3n+1),.medium-up-3>.columns:nth-of-type(3n+1) {
        clear: both
    }

    .medium-up-3>.column:last-child,.medium-up-3>.columns:last-child {
        float: left
    }

    .medium-up-4>.column,.medium-up-4>.columns {
        width: 25%;
        float: left
    }

    .medium-up-4>.column:nth-of-type(1n),.medium-up-4>.columns:nth-of-type(1n) {
        clear: none
    }

    .medium-up-4>.column:nth-of-type(4n+1),.medium-up-4>.columns:nth-of-type(4n+1) {
        clear: both
    }

    .medium-up-4>.column:last-child,.medium-up-4>.columns:last-child {
        float: left
    }

    .medium-up-5>.column,.medium-up-5>.columns {
        width: 20%;
        float: left
    }

    .medium-up-5>.column:nth-of-type(1n),.medium-up-5>.columns:nth-of-type(1n) {
        clear: none
    }

    .medium-up-5>.column:nth-of-type(5n+1),.medium-up-5>.columns:nth-of-type(5n+1) {
        clear: both
    }

    .medium-up-5>.column:last-child,.medium-up-5>.columns:last-child {
        float: left
    }

    .medium-up-6>.column,.medium-up-6>.columns {
        width: 16.66667%;
        float: left
    }

    .medium-up-6>.column:nth-of-type(1n),.medium-up-6>.columns:nth-of-type(1n) {
        clear: none
    }

    .medium-up-6>.column:nth-of-type(6n+1),.medium-up-6>.columns:nth-of-type(6n+1) {
        clear: both
    }

    .medium-up-6>.column:last-child,.medium-up-6>.columns:last-child {
        float: left
    }

    .medium-up-7>.column,.medium-up-7>.columns {
        width: 14.28571%;
        float: left
    }

    .medium-up-7>.column:nth-of-type(1n),.medium-up-7>.columns:nth-of-type(1n) {
        clear: none
    }

    .medium-up-7>.column:nth-of-type(7n+1),.medium-up-7>.columns:nth-of-type(7n+1) {
        clear: both
    }

    .medium-up-7>.column:last-child,.medium-up-7>.columns:last-child {
        float: left
    }

    .medium-up-8>.column,.medium-up-8>.columns {
        width: 12.5%;
        float: left
    }

    .medium-up-8>.column:nth-of-type(1n),.medium-up-8>.columns:nth-of-type(1n) {
        clear: none
    }

    .medium-up-8>.column:nth-of-type(8n+1),.medium-up-8>.columns:nth-of-type(8n+1) {
        clear: both
    }

    .medium-up-8>.column:last-child,.medium-up-8>.columns:last-child {
        float: left
    }

    .medium-collapse>.column,.medium-collapse>.columns {
        padding-left: 0;
        padding-right: 0
    }

    .expanded.row .medium-collapse.row,.medium-collapse .row {
        margin-left: 0;
        margin-right: 0
    }

    .medium-uncollapse>.column,.medium-uncollapse>.columns {
        padding-left: .9375rem;
        padding-right: .9375rem
    }

    .medium-centered {
        float: none;
        margin-left: auto;
        margin-right: auto
    }

    .medium-pull-0,.medium-push-0,.medium-uncentered {
        position: static;
        margin-left: 0;
        margin-right: 0;
        float: left
    }
}

@media only screen and (min-width: 1000px) {
    .large-1 {
        width:8.33333%
    }

    .large-push-1 {
        position: relative;
        left: 8.33333%
    }

    .large-pull-1 {
        position: relative;
        left: -8.33333%
    }

    .large-offset-0 {
        margin-left: 0
    }

    .large-2 {
        width: 16.66667%
    }

    .large-push-2 {
        position: relative;
        left: 16.66667%
    }

    .large-pull-2 {
        position: relative;
        left: -16.66667%
    }

    .large-offset-1 {
        margin-left: 8.33333%
    }

    .large-3 {
        width: 25%
    }

    .large-push-3 {
        position: relative;
        left: 25%
    }

    .large-pull-3 {
        position: relative;
        left: -25%
    }

    .large-offset-2 {
        margin-left: 16.66667%
    }

    .large-4 {
        width: 33.33333%
    }

    .large-push-4 {
        position: relative;
        left: 33.33333%
    }

    .large-pull-4 {
        position: relative;
        left: -33.33333%
    }

    .large-offset-3 {
        margin-left: 25%
    }

    .large-5 {
        width: 41.66667%
    }

    .large-push-5 {
        position: relative;
        left: 41.66667%
    }

    .large-pull-5 {
        position: relative;
        left: -41.66667%
    }

    .large-offset-4 {
        margin-left: 33.33333%
    }

    .large-6 {
        width: 50%
    }

    .large-push-6 {
        position: relative;
        left: 50%
    }

    .large-pull-6 {
        position: relative;
        left: -50%
    }

    .large-offset-5 {
        margin-left: 41.66667%
    }

    .large-7 {
        width: 58.33333%
    }

    .large-push-7 {
        position: relative;
        left: 58.33333%
    }

    .large-pull-7 {
        position: relative;
        left: -58.33333%
    }

    .large-offset-6 {
        margin-left: 50%
    }

    .large-8 {
        width: 66.66667%
    }

    .large-push-8 {
        position: relative;
        left: 66.66667%
    }

    .large-pull-8 {
        position: relative;
        left: -66.66667%
    }

    .large-offset-7 {
        margin-left: 58.33333%
    }

    .large-9 {
        width: 75%
    }

    .large-push-9 {
        position: relative;
        left: 75%
    }

    .large-pull-9 {
        position: relative;
        left: -75%
    }

    .large-offset-8 {
        margin-left: 66.66667%
    }

    .large-10 {
        width: 83.33333%
    }

    .large-push-10 {
        position: relative;
        left: 83.33333%
    }

    .large-pull-10 {
        position: relative;
        left: -83.33333%
    }

    .large-offset-9 {
        margin-left: 75%
    }

    .large-11 {
        width: 91.66667%
    }

    .large-push-11 {
        position: relative;
        left: 91.66667%
    }

    .large-pull-11 {
        position: relative;
        left: -91.66667%
    }

    .large-offset-10 {
        margin-left: 83.33333%
    }

    .large-12 {
        width: 100%
    }

    .large-offset-11 {
        margin-left: 91.66667%
    }

    .large-up-1>.column,.large-up-1>.columns {
        width: 100%;
        float: left
    }

    .large-up-1>.column:nth-of-type(1n),.large-up-1>.columns:nth-of-type(1n) {
        clear: none
    }

    .large-up-1>.column:nth-of-type(1n+1),.large-up-1>.columns:nth-of-type(1n+1) {
        clear: both
    }

    .large-up-1>.column:last-child,.large-up-1>.columns:last-child {
        float: left
    }

    .large-up-2>.column,.large-up-2>.columns {
        width: 50%;
        float: left
    }

    .large-up-2>.column:nth-of-type(1n),.large-up-2>.columns:nth-of-type(1n) {
        clear: none
    }

    .large-up-2>.column:nth-of-type(odd),.large-up-2>.columns:nth-of-type(odd) {
        clear: both
    }

    .large-up-2>.column:last-child,.large-up-2>.columns:last-child {
        float: left
    }

    .large-up-3>.column,.large-up-3>.columns {
        width: 33.33333%;
        float: left
    }

    .large-up-3>.column:nth-of-type(1n),.large-up-3>.columns:nth-of-type(1n) {
        clear: none
    }

    .large-up-3>.column:nth-of-type(3n+1),.large-up-3>.columns:nth-of-type(3n+1) {
        clear: both
    }

    .large-up-3>.column:last-child,.large-up-3>.columns:last-child {
        float: left
    }

    .large-up-4>.column,.large-up-4>.columns {
        width: 25%;
        float: left
    }

    .large-up-4>.column:nth-of-type(1n),.large-up-4>.columns:nth-of-type(1n) {
        clear: none
    }

    .large-up-4>.column:nth-of-type(4n+1),.large-up-4>.columns:nth-of-type(4n+1) {
        clear: both
    }

    .large-up-4>.column:last-child,.large-up-4>.columns:last-child {
        float: left
    }

    .large-up-5>.column,.large-up-5>.columns {
        width: 20%;
        float: left
    }

    .large-up-5>.column:nth-of-type(1n),.large-up-5>.columns:nth-of-type(1n) {
        clear: none
    }

    .large-up-5>.column:nth-of-type(5n+1),.large-up-5>.columns:nth-of-type(5n+1) {
        clear: both
    }

    .large-up-5>.column:last-child,.large-up-5>.columns:last-child {
        float: left
    }

    .large-up-6>.column,.large-up-6>.columns {
        width: 16.66667%;
        float: left
    }

    .large-up-6>.column:nth-of-type(1n),.large-up-6>.columns:nth-of-type(1n) {
        clear: none
    }

    .large-up-6>.column:nth-of-type(6n+1),.large-up-6>.columns:nth-of-type(6n+1) {
        clear: both
    }

    .large-up-6>.column:last-child,.large-up-6>.columns:last-child {
        float: left
    }

    .large-up-7>.column,.large-up-7>.columns {
        width: 14.28571%;
        float: left
    }

    .large-up-7>.column:nth-of-type(1n),.large-up-7>.columns:nth-of-type(1n) {
        clear: none
    }

    .large-up-7>.column:nth-of-type(7n+1),.large-up-7>.columns:nth-of-type(7n+1) {
        clear: both
    }

    .large-up-7>.column:last-child,.large-up-7>.columns:last-child {
        float: left
    }

    .large-up-8>.column,.large-up-8>.columns {
        width: 12.5%;
        float: left
    }

    .large-up-8>.column:nth-of-type(1n),.large-up-8>.columns:nth-of-type(1n) {
        clear: none
    }

    .large-up-8>.column:nth-of-type(8n+1),.large-up-8>.columns:nth-of-type(8n+1) {
        clear: both
    }

    .large-up-8>.column:last-child,.large-up-8>.columns:last-child {
        float: left
    }

    .large-collapse>.column,.large-collapse>.columns {
        padding-left: 0;
        padding-right: 0
    }

    .expanded.row .large-collapse.row,.large-collapse .row {
        margin-left: 0;
        margin-right: 0
    }

    .large-uncollapse>.column,.large-uncollapse>.columns {
        padding-left: .9375rem;
        padding-right: .9375rem
    }

    .large-centered {
        float: none;
        margin-left: auto;
        margin-right: auto
    }

    .large-pull-0,.large-push-0,.large-uncentered {
        position: static;
        margin-left: 0;
        margin-right: 0;
        float: left
    }
}

html {
    height: 100%
}

body {
    width: 100%
}

#panel {
    display: flex;
    flex-direction: column
}

#panel,body {
    min-height: 100%;
    min-height: 100vh
}

.slideout-panel {
    position: relative;
    z-index: 1
}

.slideout-overlay {
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 99999
}

@media only screen and (max-width: 600px) {
    .nav.slideout-menu {
        position:fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: auto;
        z-index: 0;
        width: 200px;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        display: none;
        height: auto;
        min-height: 100vh
    }

    .slideout-open,.slideout-open .slideout-panel,.slideout-open body {
        overflow: hidden
    }

    .slideout-open .slideout-menu {
        display: block!important
    }
}

@font-face {
    font-family: vj4icon;
    src: url(/misc/.iconfont/vj4icon.eot?8b8cdf77e8);
    src: url(/misc/.iconfont/vj4icon.eot?8b8cdf77e8#iefix) format("embedded-opentype"),url(/misc/.iconfont/vj4icon.woff2?ffd3cb2653) format("woff2"),url(/misc/.iconfont/vj4icon.woff?e6f639a3bf) format("woff"),url(/misc/.iconfont/vj4icon.ttf?c1f2b8ce4c) format("truetype");
    font-weight: 400;
    font-style: normal
}

.icon {
    font-family: vj4icon!important;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
}

.icon-account--circle:before {
    content: "\EA01"
}

.icon-add:before {
    content: "\EA02"
}

.icon-award:before {
    content: "\EA03"
}

.icon-block:before {
    content: "\EA04"
}

.icon-bold:before {
    content: "\EA05"
}

.icon-calendar:before {
    content: "\EA06"
}

.icon-check--circle:before {
    content: "\EA07"
}

.icon-check:before {
    content: "\EA08"
}

.icon-chevron_left:before {
    content: "\EA09"
}

.icon-chevron_right:before {
    content: "\EA0A"
}

.icon-close--circle:before {
    content: "\EA0B"
}

.icon-close:before {
    content: "\EA0C"
}

.icon-code:before {
    content: "\EA0D"
}

.icon-comment--multiple:before {
    content: "\EA0E"
}

.icon-comment--text:before {
    content: "\EA0F"
}

.icon-copy:before {
    content: "\EA10"
}

.icon-crown:before {
    content: "\EA11"
}

.icon-debug:before {
    content: "\EA12"
}

.icon-delete:before {
    content: "\EA13"
}

.icon-download:before {
    content: "\EA14"
}

.icon-edit:before {
    content: "\EA15"
}

.icon-enlarge:before {
    content: "\EA16"
}

.icon-erase:before {
    content: "\EA17"
}

.icon-expand_less:before {
    content: "\EA18"
}

.icon-expand_more:before {
    content: "\EA19"
}

.icon-facebook:before {
    content: "\EA1A"
}

.icon-feeling-lucky:before {
    content: "\EA1B"
}

.icon-file:before {
    content: "\EA1C"
}

.icon-filter:before {
    content: "\EA1D"
}

.icon-flag:before {
    content: "\EA1E"
}

.icon-formula:before {
    content: "\EA1F"
}

.icon-github:before {
    content: "\EA20"
}

.icon-global:before {
    content: "\EA21"
}

.icon-google_plus:before {
    content: "\EA22"
}

.icon-heart--outline:before {
    content: "\EA23"
}

.icon-heart:before {
    content: "\EA24"
}

.icon-help:before {
    content: "\EA25"
}

.icon-help2:before {
    content: "\EA26"
}

.icon-homework:before {
    content: "\EA27"
}

.icon-hourglass:before {
    content: "\EA28"
}

.icon-info--circle:before {
    content: "\EA29"
}

.icon-info:before {
    content: "\EA2A"
}

.icon-insert--image:before {
    content: "\EA2B"
}

.icon-insert--link:before {
    content: "\EA2C"
}

.icon-italic:before {
    content: "\EA2D"
}

.icon-lab:before {
    content: "\EA2E"
}

.icon-link--external:before {
    content: "\EA2F"
}

.icon-link:before {
    content: "\EA30"
}

.icon-linkedin:before {
    content: "\EA31"
}

.icon-logout:before {
    content: "\EA32"
}

.icon-mail:before {
    content: "\EA33"
}

.icon-ordered_list:before {
    content: "\EA34"
}

.icon-platform--android:before {
    content: "\EA35"
}

.icon-platform--chromeos:before {
    content: "\EA36"
}

.icon-platform--ios:before {
    content: "\EA37"
}

.icon-platform--linux:before {
    content: "\EA38"
}

.icon-platform--mac:before {
    content: "\EA39"
}

.icon-platform--mobile:before {
    content: "\EA3A"
}

.icon-platform--unknown:before {
    content: "\EA3B"
}

.icon-platform--windows:before {
    content: "\EA3C"
}

.icon-play:before {
    content: "\EA3D"
}

.icon-preview:before {
    content: "\EA3E"
}

.icon-qq:before {
    content: "\EA3F"
}

.icon-quote:before {
    content: "\EA40"
}

.icon-refresh:before {
    content: "\EA41"
}

.icon-reply:before {
    content: "\EA42"
}

.icon-schedule--fill:before {
    content: "\EA43"
}

.icon-schedule:before {
    content: "\EA44"
}

.icon-search:before {
    content: "\EA45"
}

.icon-security:before {
    content: "\EA46"
}

.icon-send:before {
    content: "\EA47"
}

.icon-settings:before {
    content: "\EA48"
}

.icon-shrink:before {
    content: "\EA49"
}

.icon-sliders:before {
    content: "\EA4A"
}

.icon-stack:before {
    content: "\EA4B"
}

.icon-star--outline:before {
    content: "\EA4C"
}

.icon-star:before {
    content: "\EA4D"
}

.icon-statistics:before {
    content: "\EA4E"
}

.icon-tag:before {
    content: "\EA4F"
}

.icon-twitter:before {
    content: "\EA50"
}

.icon-unordered_list:before {
    content: "\EA51"
}

.icon-upload:before {
    content: "\EA52"
}

.icon-user--multiple:before {
    content: "\EA53"
}

.icon-user:before {
    content: "\EA54"
}

.icon-vote--down:before {
    content: "\EA55"
}

.icon-vote--up:before {
    content: "\EA56"
}

.icon-warning:before {
    content: "\EA57"
}

.icon-web:before {
    content: "\EA58"
}

.icon-wechat:before {
    content: "\EA59"
}

.icon-wrench:before {
    content: "\EA5A"
}

.layout--immersive #panel {
    background: #80b2d5 url(/misc/immersive-background.jpg?cf6ba7132f) no-repeat;
    background-size: 1920px 1080px;
    background-size: cover
}

@media only screen and (-webkit-min-device-pixel-ratio: 1.5),only screen and (min-resolution:1.5dppx),only screen and (min-resolution:144dpi) {
    .layout--immersive #panel {
        background-image:url(/misc/immersive-background@2x.jpg?bb8bc5bcef)
    }
}

.immersive--content {
    color: #f8f8f8
}

.immersive--content h1,.immersive--content h2,.immersive--content h3,.immersive--content h4,.immersive--content h5,.immersive--content h6 {
    color: #fff
}

@media only screen and (min-width: 600px) {
    .immersive--center {
        width:300px;
        margin: 0 auto
    }
}

.immersive--center h1 {
    text-align: center;
    margin: 2em 0
}

.hasjs .hasjs--hide,.nojs .nojs--hide,.non-scratchpad--hide {
    display: none
}

.mode--scratchpad .non-scratchpad--hide,.scratchpad--hide {
    display: block
}

.mode--scratchpad .scratchpad--hide {
    display: none
}

.main {
    padding: 1.25rem 0;
    flex: 1
}

@media only screen and (min-width: 1000px) {
    .main {
        padding:1.875rem 0
    }
}

@media only screen and (max-width: 600px) {
    .main {
        padding:0
    }
}

.v-center {
    vertical-align: middle
}

.media {
    display: table;
    width: 100%
}

.media__body,.media__left,.media__right {
    display: table-cell;
    vertical-align: middle
}

.media__body.top,.media__left.top,.media__right.top {
    vertical-align: top
}

.media__body.bottom,.media__left.bottom,.media__right.bottom {
    vertical-align: bottom
}

.media__left {
    padding-right: .625rem
}

.media__right {
    padding-left: .625rem
}

.media__left img,.media__right img {
    display: block
}

.media__body {
    width: 100%
}

.numbox {
    text-align: center
}

.numbox__num.large {
    font-size: 1.6rem
}

.numbox__num.medium {
    font-size: 1.3rem
}

.numbox__text {
    font-size: .8125rem;
    margin-top: .625rem;
    color: #aaa
}

.balancer {
    width: 100%;
    display: table;
    table-layout: fixed
}

.balancer__body {
    display: table-cell;
    vertical-align: middle
}

.balancer__body.top {
    vertical-align: top
}

.balancer__body.bottom {
    vertical-align: bottom
}

.flex-row {
    display: flex;
    flex-direction: row
}

.flex-col {
    display: flex;
    flex-direction: column
}

.flex-fill {
    flex: 1;
    min-width: 0;
    min-height: 0
}

.flex-main-start {
    justify-content: flex-start
}

.flex-main-end {
    justify-content: flex-end
}

.flex-main-center {
    justify-content: center
}

.flex-cross-start {
    align-items: flex-start
}

.flex-cross-end {
    align-items: flex-end
}

.flex-cross-center {
    align-items: center
}

.flex-cross-stretch {
    align-items: stretch
}

.immersive-section,.section {
    margin-bottom: 1.875rem
}

@media only screen and (max-width: 600px) {
    .immersive-section,.section {
        margin-bottom:.625rem
    }
}

.immersive-section:after,.immersive-section:before,.section:after,.section:before {
    content: " ";
    display: table
}

.immersive-section.side,.section.side {
    font-size: .875rem
}

.section {
    background: #fff;
    box-shadow: 0 .375rem 1.375rem rgba(175,194,201,.5);
    transition: transform .5s,opacity .5s;
    transition-timing-function: cubic-bezier(.215,.61,.355,1)
}

@media only screen and (max-width: 600px) {
    .section {
        box-shadow:none;
        margin-left: -.9375rem;
        margin-right: -.9375rem
    }
}

@media only screen and (min-width: 600px) {
    .hasjs .section {
        transform:translateY(1.875rem);
        opacity: 0
    }

    .hasjs .section.visible {
        transform: none;
        opacity: 1
    }
}

.section__header {
    padding: 1.5625rem .9375rem 0;
    position: relative
}

.section__body {
    padding: .7em .9375rem
}

.section__body.no-padding {
    padding: 0!important
}

.section>.section__body:first-child {
    padding-top: 1.5625rem
}

.section>.section__body:last-child {
    padding-bottom: 1.5625rem
}

.section__footer {
    border-top: 1px solid #e4e4e4;
    padding: .9375rem
}

.section__title {
    color: #646464
}

.section__header .section__title {
    line-height: 35px
}

h1.section__title {
    font-size: 1.4rem;
    margin-bottom: .75rem
}

h2.section__title {
    font-size: 1.2rem;
    margin-bottom: .625rem
}

h3.section__title {
    font-size: 1rem;
    margin-bottom: .5rem
}

.section__header .section__title {
    margin-bottom: 0
}

.section__tools {
    position: absolute;
    right: .9375rem;
    top: 1.5625rem;
    font-size: .875rem
}

.section__tools .tool-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 0;
    background: none;
    color: #aaa;
    margin-left: .3125rem;
    padding: 0 .3125rem;
    line-height: 1.5rem;
    font-size: .8125rem;
    outline: 0
}

.section__tools .tool-button:hover {
    color: #444
}

.section__list__item {
    padding: 1.5625rem .9375rem;
    border-bottom: 1px solid #e4e4e4
}

.section__list__item:last-child {
    border-bottom: 0
}

.nothing-placeholder {
    padding: 5rem 0;
    text-align: center;
    font-size: 1.25rem;
    color: #aaa
}

.nothing-placeholder.compact {
    padding: 1.25rem 0
}

.nothing-icon {
    background: url(/misc/puzzled_twd2.svg?5b612b1e08) no-repeat 50%;
    height: 184px;
    margin-bottom: 1.25rem
}

.drop-element.autocomplete {
    max-width: 15.625rem
}

.drop-element.autocomplete .empty-row {
    color: #aaa;
    font-size: $(font-size-small);
    padding: .625rem
}

.drop-element.autocomplete .menu {
    max-height: 15.625rem;
    overflow: auto
}

.menu.domain-select {
    width: 12.5rem
}

.domain-select__id {
    font-size: .8125rem;
    color: #bbb
}

.menu.user-select {
    width: 12.5rem
}

.user-select__uid {
    font-size: .8125rem;
    color: #bbb
}

.calendar__header {
    line-height: 2.8125rem;
    text-align: center
}

.calendar__header h1 {
    display: inline-block;
    line-height: inherit;
    width: 17.5rem
}

.calendar__header button {
    font-size: 1.25rem;
    color: #888;
    padding: 0 .625rem;
    outline: 0
}

.calendar__header button:hover {
    color: #5f9fd6
}

.calendar__week-title table {
    width: 100%
}

.calendar__week-title th {
    width: 14.28%;
    padding: 1.25rem .625rem;
    color: #aaa
}

.calendar__row {
    position: relative
}

.calendar__row__bg {
    position: absolute;
    left: 0;
    top: 0
}

.calendar__row__bg,.calendar__row__bg table {
    width: 100%;
    height: 100%
}

.calendar__row__bg td {
    width: 14.28%;
    border: 1px solid #e4e4e4
}

.calendar__row__bg td.is-current-day {
    background: #fae8ed
}

.calendar__row__content {
    min-height: 6.25rem;
    position: relative;
    z-index: 2;
    padding-bottom: .625rem
}

.calendar__row__content table {
    width: 100%
}

.calendar__row__content th {
    width: 14.28%;
    padding: .625rem;
    color: #6e6e6e
}

.calendar__row__content th.is-inactive {
    opacity: .3
}

.calendar__row__content th.is-current-day {
    color: #df6589
}

.calendar__row__content td {
    position: relative;
    height: 1.5rem
}

.calendar__banner {
    position: absolute;
    display: block;
    top: .125rem;
    left: .3125rem;
    right: .3125rem;
    height: 1.25rem;
    line-height: 1.25rem;
    padding: 0 .3125rem;
    font-size: .8125rem;
    border-radius: .3125rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
}

.calendar__banner,.calendar__banner:active,.calendar__banner:hover,.calendar__banner:visited {
    color: #fff;
    text-decoration: none
}

.calendar__banner.is-snap-begin,.calendar__banner.is-trunc-begin {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0
}

.calendar__banner.is-snap-end,.calendar__banner.is-trunc-end {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0
}

.calendar__banner.is-snap-begin {
    left: 0;
    padding-left: .625rem
}

.calendar__banner.is-snap-end {
    right: 0;
    padding-right: .625rem
}

.calendar__banner.is-masked {
    background-image: repeating-linear-gradient(45deg,rgba(0,0,0,.1),rgba(0,0,0,.1) 10px,transparent 0,transparent 20px)
}

.calendar__banner.color-0 {
    background-color: #fa6582
}

.calendar__banner.color-1 {
    background-color: #eea9c5
}

.calendar__banner.color-2 {
    background-color: #fdb24d
}

.calendar__banner.color-3 {
    background-color: #98ca86
}

.calendar__banner.color-4 {
    background-color: #7dcbbf
}

.calendar__banner.color-5 {
    background-color: #20bde8
}

.calendar__banner.color-6 {
    background-color: #6bcddb
}

.calendar__banner.color-7 {
    background-color: #6598ff
}

.calendar__banner.color-8 {
    background-color: #8eb0f5
}

.calendar__banner.color-9 {
    background-color: #928fe3
}

.calendar__banner.color-10 {
    background-color: #676e7e
}

.calendar__banner.color-11 {
    background-color: #a1a5ab
}

.calendar__body-container {
    position: relative
}

.calendar__body.exit {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.contest-tag,.contest-type-tag {
    font-size: .8125rem;
    display: inline-block;
    line-height: 1.375rem;
    padding: 0 .625rem;
    vertical-align: middle;
    border-radius: .75rem
}

.contest-tag:hover,.contest-type-tag:hover {
    text-decoration: none;
    color: #fff!important
}

.contest-type-tag,.contest-type-tag:visited,.supplementary .contest-type-tag,.supplementary .contest-type-tag:visited {
    color: #fff
}

.contest-type-tag .icon {
    margin-right: .3125rem
}

.contest-type--acm .contest-type-tag {
    background: #6bb67a
}

.contest-type--acm .contest-type-tag:hover {
    background: #89c595
}

.contest-type--oi .contest-type-tag {
    background: #f5c735
}

.contest-type--oi .contest-type-tag:hover {
    background: #f7d25d
}

.contest-tag {
    border: 1px solid #dfdfdf
}

.contest-tag:hover {
    background: #5f9fd6;
    border-color: #5f9fd6
}

.contest-sidebar__bg {
    display: block;
    background: #67aabb url(/components/contest/problem-contest-bg.png?9ef6c911d9) 100% 0 no-repeat;
    color: #fff!important;
    font-size: 1rem;
    padding: 1.25rem 0
}

@media only screen and (-webkit-min-device-pixel-ratio: 1.5),only screen and (min-resolution:1.5dppx),only screen and (min-resolution:144dpi) {
    .contest-sidebar__bg {
        background-image:url(/components/contest/problem-contest-bg@2x.png?f4483edcb5);
        background-size: 131px 150px
    }
}

.contest-sidebar__bg h1 {
    font-size: 1.25rem;
    color: #fff;
    text-shadow: 0 1px 3px rgba(0,0,0,.5)
}

.contest-sidebar__bg:hover {
    text-decoration: none
}

.contest-sidebar__bg .contest-sidebar__status {
    margin-top: 1.25rem
}

.dialog {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 1000;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: none;
    background: hsla(0,0%,94.1%,.6)
}

.dialog__content {
    position: relative
}

.dialog.withBg .dialog__content {
    background: #fff;
    border: 1px solid #ddd;
    box-shadow: 0 .125rem .625rem rgba(0,0,0,.2);
    min-width: 31.25rem;
    max-width: 56.25rem;
    padding: 2.5rem 1.875rem
}

.dialog__body {
    margin-bottom: 1.25rem;
    min-height: 3.125rem
}

.dialog__body h1 {
    font-size: 1.6rem;
    color: #646464;
    margin-bottom: 1rem
}

.dialog__action button {
    margin-left: .625rem;
    margin-bottom: 0
}

.dczcomments__item .is-editing>.typo,.dczcomments__item .is-editing [name=dczcomments__dummy-box] {
    display: none
}

.dczcomments__box .textbox {
    height: 11.25rem;
    resize: vertical
}

.textbox[name=dczcomments__dummy-box] {
    height: 3.75rem;
    resize: none;
    font-size: 1.25rem;
    color: #aaa;
    padding: .625rem
}

.dczcomments__item,.dczcomments__reply {
    border-top: 1px solid #e4e4e4
}

.dczcomments__item>.media,.dczcomments__reply>.media {
    padding: 1.25rem 0
}

.dczcomments__item:first-child,.dczcomments__reply:first-child {
    border-top: 0
}

.dczcomments__reply:last-child>.media {
    padding-bottom: 0
}

.dczcomments__supplementary {
    float: left;
    margin-bottom: .3125rem
}

.dczcomments__operations {
    font-size: 1rem;
    float: right;
    vertical-align: top;
    color: #888
}

.dczcomments__operations a,.dczcomments__operations a:visited {
    color: #aaa;
    margin-left: .1875rem
}

.dczcomments__operations a:hover {
    color: #5f9fd6;
    text-decoration: none
}

.view--solution .dczcomments__replies {
    margin-left: 3.125rem
}

.dczcomments__item .vote-number {
    width: 5.125rem;
    text-align: center;
    font-size: 1.5625rem;
    font-weight: 300;
    margin-bottom: .625rem
}

.dczcomments__item .vote-op {
    position: relative;
    border: 1px solid transparent;
    border-radius: .875rem;
    transition: border-color .2s linear,opacity .2s linear;
    opacity: .5
}

.dczcomments__item .vote-op>form {
    width: 2.5rem;
    float: left;
    position: relative
}

.dczcomments__item:hover .vote-op {
    opacity: 1;
    border-color: #dfdfdf
}

.dczcomments__item .vote-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 0;
    background: none;
    width: 100%;
    outline: 0;
    font-size: 1rem;
    line-height: 1.625rem;
    color: #aaa;
    transition: color .2s linear,background-color .2s linear,box-shadow .2s linear
}

.dczcomments__item .vote-button.upvote {
    border-radius: .8125rem 0 0 .8125rem;
    padding-left: .4375rem
}

.dczcomments__item .vote-button.upvote:hover {
    background: #2ecc40;
    color: #fff;
    box-shadow: 0 2px 10px rgba(46,204,64,.4)
}

.dczcomments__item .vote-button.upvote.active {
    color: #2ecc40
}

.dczcomments__item .vote-button.downvote {
    border-radius: 0 .8125rem .8125rem 0;
    padding-right: .4375rem
}

.dczcomments__item .vote-button.downvote:hover {
    background: #ff4136;
    color: #fff;
    box-shadow: 0 2px 10px rgba(255,65,54,.4)
}

.dczcomments__item .vote-button.downvote.active {
    color: #ff4136
}

.dczcomments__item .vote-button.active {
    background: transparent!important;
    box-shadow: none!important;
    cursor: default
}

@media only screen and (max-width: 600px) {
    .dczcomments__item .media__left {
        display:none
    }
}

.discussion-node-tag {
    font-size: .8125rem;
    display: inline-block;
    line-height: 1.375rem;
    padding: 0 .625rem;
    vertical-align: middle;
    border-radius: .75rem;
    border: 1px solid #dfdfdf
}

.discussion-node-tag:hover {
    background: #5f9fd6;
    color: #fff!important;
    text-decoration: none;
    border-color: #5f9fd6
}

.discussion-node-tag .icon {
    margin-right: .3125rem
}

.drop-element,.drop-element *,.drop-element:after,.drop-element :after,.drop-element:before,.drop-element :before {
    box-sizing: border-box
}

.drop-element {
    position: absolute;
    display: none;
    opacity: 0;
    transition: opacity .1s ease-in-out;
    z-index: 1000
}

.drop-element.drop-open,.drop-element.drop-open-transitionend {
    display: block
}

.drop-element.drop-after-open {
    opacity: 1
}

.drop-target-attached-top.drop-target-attached-left .drop-content {
    transform-origin: -10% 110%
}

.drop-target-attached-top.drop-target-attached-center .drop-content {
    transform-origin: 50% 110%
}

.drop-target-attached-top.drop-target-attached-right .drop-content {
    transform-origin: 110% 110%
}

.drop-target-attached-bottom.drop-target-attached-left .drop-content {
    transform-origin: -10% -10%
}

.drop-target-attached-bottom.drop-target-attached-center .drop-content {
    transform-origin: 50% -10%
}

.drop-target-attached-bottom.drop-target-attached-right .drop-content {
    transform-origin: 110% -10%
}

.drop-target-attached-center.drop-target-attached-right .drop-content {
    transform-origin: -10% 50%
}

.drop-target-attached-center.drop-target-attached-left .drop-content {
    transform-origin: 110% 50%
}

.dropdown-target {
    display: none
}

.drop .dropdown-target {
    display: block
}

.dropdown .menu {
    min-width: 9.375rem;
    box-shadow: 0 .125rem .4375rem rgba(0,0,0,.3);
    background: #fff;
    font-size: .8125rem
}

.dropdown .menu__link {
    padding: .5rem .625rem
}

.dropdown .drop-content {
    transition: transform .1s ease-in-out;
    transform: scale(.9) translateZ(0)
}

.dropdown.drop-after-open .drop-content {
    transform: scale(1) translateZ(0)
}

.emoji {
    width: 1em;
    height: 1em;
    display: inline-block;
    background-size: contain;
    vertical-align: baseline
}

.footer {
    background: #fff;
    color: #555
}

.footer h1 {
    font-size: 1.25rem
}

@media only screen and (max-width: 600px) {
    .footer h1 {
        padding:.9375rem;
        cursor: pointer;
        font-size: .875rem
    }
}

.footer__category {
    padding-top: 1.875rem;
    padding-bottom: 3.125rem
}

@media only screen and (max-width: 600px) {
    .footer__category {
        padding-top:.9375rem;
        padding-bottom: .9375rem;
        border-bottom: 1px solid #f2f2f2
    }

    .footer__category.expandable {
        padding: 0
    }
}

.footer__category .expand-icon {
    display: none
}

@media only screen and (max-width: 600px) {
    .footer__category .expand-icon {
        display:inline-block
    }
}

.footer__category.expanded .expand-icon {
    transform: rotate(180deg)
}

.footer__category__list {
    margin-top: .625rem;
    margin-bottom: .625rem;
    font-size: .8125rem;
    line-height: 2
}

@media only screen and (max-width: 600px) {
    .footer__category__list {
        margin-top:0;
        padding-left: .9375rem;
        padding-right: .9375rem
    }
}

@media only screen and (max-width: 600px) {
    .footer__category__expander {
        display:none
    }
}

@media only screen and (min-width: 600px) {
    .footer__category__expander {
        display:block!important
    }
}

.footer__extra-left {
    float: left
}

.footer__extra-right {
    float: right
}

.footer__extra-link {
    padding: 1.25rem 0;
    font-size: .8125rem
}

.footer__extra-link-item {
    float: left;
    line-height: 2
}

.footer__extra-left .footer__extra-link-item {
    margin-right: 1.25rem
}

.footer__extra-right .footer__extra-link-item {
    margin-left: 1.25rem
}

.layout--immersive .footer {
    background: none;
    color: #fff
}

.layout--immersive .footer a,.layout--immersive .footer a:active,.layout--immersive .footer a:hover,.layout--immersive .footer a:visited {
    color: #fff
}

@media only screen and (max-width: 600px) {
    .footer__extra-left,.footer__extra-right {
        float:none;
        display: block
    }

    .footer__extra-left .footer__extra-link-item,.footer__extra-right .footer__extra-link-item {
        float: none;
        display: inline-block;
        margin-left: 0;
        margin-right: 20px
    }
}

.button {
    font-size: .875rem;
    line-height: 2.0625rem;
    background-color: #eee;
    border: 1px solid #ddd;
    height: 2.1875rem;
    padding: 0 1.5625rem;
    display: inline-block;
    outline: 0;
    margin: 0 0 1rem;
    transition: background-color .2s,box-shadow .5s;
    transition-timing-function: cubic-bezier(.39,.575,.565,1);
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.button,.button:hover,.button:visited,.typo .button,.typo .button:hover,.typo .button:visited {
    color: #555
}

.button:focus,.button:hover {
    text-decoration: none
}

.button:not(.disabled):focus,.button:not(.disabled):hover {
    background-color: #d2d2d2;
    border-color: #d2d2d2;
    box-shadow: 0 4px 15px hsla(0,0%,78%,.5)
}

.button:not(.disabled):focus {
    border-color: #c1e0ff
}

.button.expanded {
    padding-left: 0;
    padding-right: 0;
    text-align: center;
    width: 100%
}

.button.rounded {
    border-radius: 1.09375rem
}

.button.primary {
    border-color: #5f9fd6;
    background-color: #5f9fd6
}

.button.primary,.button.primary:hover,.button.primary:visited,.typo .button.primary,.typo .button.primary:hover,.typo .button.primary:visited {
    color: #fff
}

.button.primary:not(.disabled):hover {
    background-color: #5faaea;
    border-color: #35a2ff;
    box-shadow: 0 4px 15px rgba(53,162,255,.3)
}

.button.disabled {
    cursor: default;
    opacity: .5
}

.button.compact {
    margin-bottom: 0;
    height: 1.75rem;
    line-height: 1.625rem;
    padding: 0 .9375rem
}

.button.inverse {
    line-height: 1.9375rem;
    border: 2px solid #fff;
    background: none
}

.button.inverse,.button.inverse:visited,.typo .button.inverse,.typo .button.inverse:visited {
    color: #fff
}

.button.inverse:not(.disabled):focus,.button.inverse:not(.disabled):hover {
    border-color: #ffef87;
    background: none;
    box-shadow: none
}

.button.inverse:not(.disabled):focus,.button.inverse:not(.disabled):hover,.typo .button.inverse:not(.disabled):focus,.typo .button.inverse:not(.disabled):hover {
    color: #ffef87
}

.checkbox {
    font-size: .875rem;
    line-height: 1.4;
    border: 0;
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: #888;
    margin: 0 0 1rem;
    padding: .48125rem 0
}

.checkbox:hover {
    color: #555
}

.checkbox input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 1px solid #d0d0d0;
    display: inline-block;
    border-radius: 1px;
    vertical-align: top;
    width: 1rem;
    height: 1rem;
    margin: .1125rem .3125rem .1125rem 0;
    position: relative;
    outline: 0;
    transition: background .1s linear;
    background: none;
    cursor: pointer
}

.checkbox input:after {
    content: "";
    width: .625rem;
    height: .375rem;
    position: absolute;
    top: .1875rem;
    left: .125rem;
    border: 2px solid #fff;
    border-top: none;
    border-right: none;
    background: transparent;
    transform: rotate(-65deg) scale(.5);
    opacity: 0
}

.checkbox input:enabled:hover {
    border-color: rgba(237,95,130,.7)
}

.checkbox input:checked {
    background: #ed5f82;
    border-color: #ed5f82
}

.checkbox input:checked:after {
    opacity: 1;
    transform: rotate(-45deg)
}

.checkbox input:disabled {
    opacity: .5
}

.checkbox.compact {
    margin-bottom: 0;
    line-height: 1.2;
    padding: .35rem 0
}

.checkbox.compact input {
    margin: .025rem .3125rem .025rem 0
}

label.checkbox.inverse {
    color: hsla(0,0%,97.3%,.8)
}

label.checkbox.inverse input {
    color: #f8f8f8;
    border-color: hsla(0,0%,97.3%,.4)
}

label.checkbox.inverse input:-moz-read-only {
    color: hsla(0,0%,97.3%,.6)
}

label.checkbox.inverse input:disabled,label.checkbox.inverse input:read-only {
    color: hsla(0,0%,97.3%,.6)
}

label.checkbox.inverse input:enabled:-moz-read-write:hover {
    border-color: hsla(0,0%,97.3%,.8)
}

label.checkbox.inverse input:enabled:read-write:hover {
    border-color: hsla(0,0%,97.3%,.8)
}

label.checkbox.inverse input:enabled:-moz-read-write:focus {
    border-color: #ffef87
}

label.checkbox.inverse input:enabled:read-write:focus {
    border-color: #ffef87
}

label.checkbox.inverse.focus {
    color: #ffef87
}

button,input,optgroup,select,textarea {
    color: inherit;
    font: inherit;
    margin: 0
}

button {
    overflow: visible
}

button,select {
    text-transform: none
}

button,html input[type=button],input[type=reset],input[type=submit] {
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    cursor: pointer
}

button[disabled],html input[disabled] {
    cursor: not-allowed
}

button::-moz-focus-inner,input::-moz-focus-inner {
    border: 0;
    padding: 0
}

input {
    line-height: normal
}

input[type=checkbox],input[type=radio] {
    box-sizing: border-box;
    padding: 0
}

input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button {
    height: auto
}

input[type=search] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
    box-sizing: content-box
}

input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration {
    -webkit-appearance: none
}

legend {
    border: 0;
    padding: 0
}

textarea {
    overflow: auto
}

optgroup {
    font-weight: 700
}

.form--inline {
    display: inline
}

textarea {
    height: auto;
    border-radius: 0;
    resize: vertical
}

select {
    width: 100%;
    border-radius: 0
}

button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: transparent;
    padding: 0;
    border: 0;
    border-radius: 0;
    line-height: 1
}

[data-whatinput=mouse] button {
    outline: 0
}

label {
    margin: 0;
    font-size: .875rem;
    line-height: 1.8;
    color: #666
}

label,label input,label select,label textarea {
    display: block
}

.help-text {
    margin-top: -.5rem;
    margin-bottom: 1rem;
    font-size: .8125rem;
    color: #888
}

.form__item {
    transition: opacity .1s linear
}

.form__item.is--disabled {
    opacity: .3
}

.form__item :disabled {
    opacity: 1
}

.radiobox {
    display: block;
    font-size: .875rem;
    line-height: 1.4;
    border: 0;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: #888;
    margin: 0 .3rem .15rem 0
}

.radiobox:hover {
    color: #555
}

.radiobox input {
    display: inline-block
}

.radiobox-container {
    margin: 0 0 1rem
}

.radiobox.with-image {
    margin: 0 .3rem .3rem 0
}

.radiobox.with-image .radiobox__image-container {
    cursor: pointer;
    border: 2px solid #ddd;
    transition: border-color .1s linear,opacity .1s linear;
    padding: 1px;
    overflow: hidden;
    position: relative;
    opacity: .7
}

.radiobox.with-image .radiobox__image-container:hover {
    border: 2px solid #5f9fd6;
    opacity: 1
}

.radiobox.with-image .radiobox__image-container:after {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    right: -.625rem;
    top: -.625rem;
    transform: translateX(10px) translateY(-10px) rotate(45deg);
    background: #df6589;
    content: "";
    transition: transform .1s cubic-bezier(.215,.61,.355,1)
}

.radiobox.with-image input {
    visibility: hidden;
    position: absolute
}

.radiobox.with-image input:checked+.radiobox__image-container {
    border: 2px solid #df6589;
    opacity: 1
}

.radiobox.with-image input:checked+.radiobox__image-container:after {
    transform: rotate(45deg)
}

.select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: block;
    width: 100%;
    font-size: .875rem;
    margin: 0 0 1rem;
    height: 2.1875rem;
    line-height: 1.2;
    border: 1px solid #ddd;
    padding: .3125rem 1.1rem .3125rem .3125rem;
    background-color: #fff;
    background-image: url(/misc/icons/expand_more.svg?9058acf72a);
    background-size: 16px 16px;
    background-position: right -1rem center;
    background-origin: content-box;
    background-repeat: no-repeat;
    outline: 2px solid transparent;
    transition: outline-color .2s,border-color .2s;
    transition-timing-function: cubic-bezier(.215,.61,.355,1)
}

.select.inline {
    display: inline-block;
    width: auto
}

.select:focus {
    border-color: #5f9fd6;
    outline: 2px solid #c1e0ff;
    outline-offset: 0
}

.select:disabled {
    opacity: .5
}

.select-container.compact .select,.select.compact {
    margin-bottom: 0;
    height: 1.75rem;
    line-height: 1.625rem;
    padding-top: 0;
    padding-bottom: 0
}

input.textbox,textarea.textbox {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: block;
    width: 100%;
    font-size: .875rem;
    margin: 0 0 1rem;
    height: 2.1875rem;
    line-height: 1.2;
    padding: .3125rem;
    border: 1px solid #ddd;
    background-color: #fff;
    outline: 2px solid transparent;
    transition: outline-color .2s,border-color .2s;
    transition-timing-function: cubic-bezier(.215,.61,.355,1)
}

input.textbox.inline,textarea.textbox.inline {
    display: inline-block;
    width: auto
}

input.textbox:focus,textarea.textbox:focus {
    border-color: #5f9fd6;
    outline: 2px solid #c1e0ff;
    outline-offset: 0
}

input.textbox:-moz-read-only,textarea.textbox:-moz-read-only {
    outline: 0
}

input.textbox:read-only,textarea.textbox:read-only {
    outline: 0
}

input.textbox:disabled,textarea.textbox:disabled {
    opacity: .5
}

textarea.textbox {
    height: 12.5rem
}

.data-table input.textbox,.data-table textarea.textbox {
    margin-bottom: 0
}

label.textbox.material input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: block;
    width: 100%;
    font-size: .875rem;
    margin: 0 0 1rem;
    height: 2.1875rem;
    line-height: 1.2;
    border: 0;
    background: none;
    outline: 0;
    padding: .3125rem 0;
    color: #555;
    border-bottom: 2px solid rgba(85,85,85,.4);
    transition: border-color .2s cubic-bezier(.215,.61,.355,1)
}

label.textbox.material input.inline {
    display: inline-block;
    width: auto
}

label.textbox.material input:-moz-read-only {
    color: rgba(85,85,85,.6)
}

label.textbox.material input:disabled,label.textbox.material input:read-only {
    color: rgba(85,85,85,.6)
}

label.textbox.material input:enabled:-moz-read-write:hover {
    border-color: rgba(85,85,85,.8)
}

label.textbox.material input:enabled:read-write:hover {
    border-color: rgba(85,85,85,.8)
}

label.textbox.material input:enabled:-moz-read-write:focus {
    border-color: #5f9fd6
}

label.textbox.material input:enabled:read-write:focus {
    border-color: #5f9fd6
}

label.textbox.material.focus {
    color: #5f9fd6
}

label.textbox.material.inverse {
    color: hsla(0,0%,97.3%,.8)
}

label.textbox.material.inverse input {
    color: #f8f8f8;
    border-color: hsla(0,0%,97.3%,.4)
}

label.textbox.material.inverse input:-moz-read-only {
    color: hsla(0,0%,97.3%,.6)
}

label.textbox.material.inverse input:disabled,label.textbox.material.inverse input:read-only {
    color: hsla(0,0%,97.3%,.6)
}

label.textbox.material.inverse input:enabled:-moz-read-write:hover {
    border-color: hsla(0,0%,97.3%,.8)
}

label.textbox.material.inverse input:enabled:read-write:hover {
    border-color: hsla(0,0%,97.3%,.8)
}

label.textbox.material.inverse input:enabled:-moz-read-write:focus {
    border-color: #ffef87
}

label.textbox.material.inverse input:enabled:read-write:focus {
    border-color: #ffef87
}

label.textbox.material.inverse.focus {
    color: #ffef87
}

.global-notification {
    padding: 1.25rem 0;
    background: #fff
}

.global-notification.warning {
    background: #ffe1a6
}

.header {
    position: relative;
    height: 20rem;
    background: #5eafca url(/components/header/header-background.png?4cb6054e84) no-repeat top;
    background-size: cover;
    transition: height .5s;
    transition-timing-function: cubic-bezier(.215,.61,.355,1);
    overflow: hidden
}

@media only screen and (-webkit-min-device-pixel-ratio: 1.5),only screen and (min-resolution:1.5dppx),only screen and (min-resolution:144dpi) {
    .header {
        background-image:url(/components/header/header-background@2x.png?5bdf5c54c2);
        background-size: 120rem 20rem
    }
}

.header.mini {
    height: 13.75rem
}

@media only screen and (max-width: 600px) {
    .header {
        background:#fff;
        height: auto!important
    }

    .header .header__content {
        display: none
    }
}

.header__logo {
    display: block;
    width: 23.8125rem;
    height: 12.96875rem;
    background: url(/components/header/header-logo-summer.png?266c213cdc) no-repeat;
    background-size: 23.8125rem 12.5625rem;
    background-position: 0 .40625rem;
    transition: transform .5s,opacity .5s;
    transition-timing-function: cubic-bezier(.215,.61,.355,1);
    transform-origin: 0 0;
    opacity: 1
}

@media only screen and (-webkit-min-device-pixel-ratio: 1.5),only screen and (min-resolution:1.5dppx),only screen and (min-resolution:144dpi) {
    .header__logo {
        background-image:url(/components/header/header-logo-summer@2x.png?31e889d1db)
    }
}

@media only screen and (max-width: 600px) {
    .header__logo {
        display:inline-block
    }
}

.header__logo--domain {
    font-size: 2.5rem;
    margin-top: 5.46875rem;
    height: 3.75rem;
    line-height: 3.75rem
}

.header__logo--domain a {
    text-shadow: 1px 1px 5px rgba(0,0,0,.4)
}

.header__logo--domain a,.header__logo--domain a:hover,.header__logo--domain a:link,.header__logo--domain a:visited {
    color: #fff;
    text-decoration: none
}

.header__logo--system {
    line-height: 1.875rem;
    color: #fff;
    font-size: .8125rem
}

.header__logo--system a {
    opacity: .8
}

.header__logo--system a,.header__logo--system a:hover,.header__logo--system a:link,.header__logo--system a:visited {
    text-decoration: none;
    color: #fff
}

.header__logo--system a:hover {
    opacity: 1;
    text-decoration: underline
}

.header--collapsed #panel {
    padding-top: 320px
}

.header--collapsed .header {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 0
}

.header--collapsed .header__logo {
    transform: scale(0);
    opacity: 0
}

.location {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 6.25rem;
    background: rgba(0,0,0,.5)
}

@media only screen and (max-width: 600px) {
    .location {
        position:relative;
        height: auto
    }
}

.location .header__hamburger {
    display: none
}

@media only screen and (max-width: 600px) {
    .location .header__hamburger {
        display:block
    }
}

.header.mini .location {
    display: none
}

.location-path {
    color: hsla(0,0%,100%,.3);
    line-height: 1.875rem;
    margin-top: .625rem
}

.location-path a,.location-path a:visited {
    color: hsla(0,0%,100%,.6)
}

.location-path a:hover {
    color: hsla(0,0%,100%,.9)
}

.location-current {
    color: #9ad4f1;
    line-height: 2.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
}

@media only screen and (max-width: 600px) {
    .location-current {
        color:#91fcff;
        font-size: 1.7rem;
        white-space: normal
    }
}

.header--mobile {
    display: none
}

@media only screen and (max-width: 600px) {
    .header--mobile,.location {
        display:block;
        background: #56758f;
        color: #fff;
        line-height: 2.8125rem;
        font-size: 1.25rem;
        padding: .625rem 0
    }
}

.header--mobile a,.header--mobile a:hover,.header--mobile a:visited,.location a,.location a:hover,.location a:visited {
    color: #fff
}

.header--mobile__domain.is--system {
    display: block;
    width: 45px;
    height: 23px;
    margin-top: .625rem;
    background: url(/components/navigation/nav-logo-small_light.png?d89af9b245) no-repeat
}

@media only screen and (-webkit-min-device-pixel-ratio: 1.5),only screen and (min-resolution:1.5dppx),only screen and (min-resolution:144dpi) {
    .header--mobile__domain.is--system {
        background:url(/components/navigation/nav-logo-small@2x_light.png?13a52d1c64) no-repeat;
        background-size: 45px 23px
    }
}

.header--mobile__system {
    margin-left: .625rem;
    font-size: .875rem
}

.header--mobile__system,.header--mobile__system:hover,.header--mobile__system:visited {
    color: #aaa
}

.header__hamburger {
    background: none;
    border: 0;
    border-radius: 0;
    outline: 0
}

span.cm-comment {
    color: green
}

span.cm-keyword,span.cm-variable-3 {
    line-height: 1em;
    color: #00f
}

span.cm-string {
    color: #a31515
}

span.cm-builtin {
    line-height: 1em;
    font-weight: 700;
    color: #077
}

span.cm-special {
    line-height: 1em;
    font-weight: 700;
    color: #0aa
}

span.cm-variable {
    color: #000
}

span.cm-meta {
    color: #2b91af
}

span.cm-link {
    color: #3a3
}

.CodeMirror-activeline-background {
    background: #e8f2ff
}

.CodeMirror-matchingbracket {
    outline: 1px solid grey;
    color: #000!important
}

code,pre {
    background: #f8f8f8
}

pre>code {
    background: none;
    line-height: 1.5
}

pre {
    position: relative;
    padding: .3125rem
}

code {
    color: #c92a2a;
    font-size: .875rem
}

pre>code {
    color: #111;
    text-align: left;
    white-space: pre-wrap;
    word-spacing: normal;
    word-break: normal;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none
}

[data-syntax-hl-show-line-number] pre.line-numbers>code {
    white-space: pre
}

.syntax-hl .token.cdata,.syntax-hl .token.comment,.syntax-hl .token.doctype,.syntax-hl .token.prolog {
    color: green;
    font-style: italic
}

.syntax-hl .token.namespace {
    opacity: .7
}

.syntax-hl .token.string {
    color: #a31515
}

.syntax-hl .token.operator,.syntax-hl .token.punctuation {
    color: #393a34
}

.syntax-hl .token.boolean,.syntax-hl .token.inserted,.syntax-hl .token.number,.syntax-hl .token.symbol,.syntax-hl .token.url {
    color: #36acaa
}

.language-autohotkey.syntax-hl .token.selector,.language-json.syntax-hl .token.boolean,.language-json.syntax-hl .token.number,.syntax-hl .token.atrule,.syntax-hl .token.attr-value,.syntax-hl .token.keyword {
    color: #00f
}

.syntax-hl .token.function {
    color: #393a34
}

.language-autohotkey.syntax-hl .token.tag,.syntax-hl .token.deleted {
    color: #9a050f
}

.language-autohotkey.syntax-hl .token.keyword,.syntax-hl .token.selector {
    color: #00009f
}

.syntax-hl .token.bold,.syntax-hl .token.important {
    font-weight: 700
}

.syntax-hl .token.italic {
    font-style: italic
}

.language-json.syntax-hl .token.property,.syntax-hl .token.class-name {
    color: #2b91af
}

.syntax-hl .token.selector,.syntax-hl .token.tag {
    color: maroon
}

.syntax-hl .token.attr-name,.syntax-hl .token.entity,.syntax-hl .token.property,.syntax-hl .token.regex {
    color: red
}

.syntax-hl .token.directive.tag .tag {
    background: #ff0;
    color: #393a34
}

.syntax-hl .token.macro,.syntax-hl .token.macro .token {
    color: #2b91af
}

.syntax-hl .token.builtin {
    color: #077
}

.syntax-hl .toolbar {
    position: absolute;
    white-space: no-wrap;
    right: 0;
    top: 0;
    padding: .3125rem;
    background: hsla(0,0%,97.3%,.8);
    font-family: Open Sans,Seravek,Segoe UI,Verdana,PingFang SC,Hiragino Sans GB,Lantinghei SC,Microsoft Yahei,WenQuanYi Micro Hei,sans;
    font-size: .8125rem;
    opacity: 0;
    pointer-events: none;
    transition: opacity .1s linear;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.syntax-hl:hover .toolbar {
    opacity: 1;
    pointer-events: all
}

[data-syntax-hl-show-line-number] pre {
    padding-left: 3.8em;
    counter-reset: linenumber
}

[data-syntax-hl-show-line-number] pre>code {
    position: relative
}

[data-syntax-hl-show-line-number] .line-numbers-rows {
    position: absolute;
    pointer-events: none;
    top: 0;
    font-size: 100%;
    left: -3.8em;
    width: 3em;
    letter-spacing: -1px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

[data-syntax-hl-show-line-number] .line-numbers-rows span {
    pointer-events: none;
    display: block;
    counter-increment: linenumber
}

[data-syntax-hl-show-line-number] .line-numbers-rows span:before {
    content: counter(linenumber);
    color: #ddd;
    display: block;
    padding-right: .8em;
    text-align: right
}

.homework-status--text.not_started {
    color: #6e6e6e
}

.homework-status--text.ongoing {
    color: #25ad40
}

.loader-container {
    position: absolute;
    left: 0;
    width: 100%;
    top: 0;
    height: 100%
}

.loader {
    text-indent: -9999em;
    border: .3125rem solid rgba(95,159,214,.2);
    border-left-color: #5f9fd6;
    -webkit-animation: load8 1.1s linear infinite;
    animation: load8 1.1s linear infinite;
    border-radius: 50%;
    width: 3.125rem;
    height: 3.125rem;
    margin-left: -1.5625rem;
    margin-top: -1.5625rem;
    left: 50%;
    top: 50%;
    position: absolute
}

@-webkit-keyframes load8 {
    0% {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(1turn)
    }
}

@keyframes load8 {
    0% {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(1turn)
    }
}

[data-marker-enabled] {
    outline: 0
}

.marker {
    position: fixed;
    z-index: 100;
    display: none;
    box-shadow: 0 2px 7px rgba(0,0,0,.3);
    font-size: .8125rem;
    transition: transform .1s ease-out,opacity .1s ease-out;
    transform: scale(.8);
    transform-origin: 0 100%;
    pointer-events: none;
    background: #fff;
    padding: 1px;
    border: 1px solid #aaa
}

.marker.open {
    transform: none;
    pointer-events: auto
}

.marker__toolbar {
    padding: 1px;
    background: #f2f6f7;
    white-space: nowrap;
    font-size: 0
}

.marker__action {
    display: inline-block;
    text-align: center;
    font-size: 1rem;
    vertical-align: top;
    cursor: pointer;
    padding: .5rem;
    color: #8395a1;
    position: relative
}

.marker__action:hover {
    background: #e3e7e8;
    color: #5a6b75
}

.marker__icon {
    display: block;
    margin: .125rem;
    width: .75rem;
    height: .75rem;
    border-radius: 50%
}

.marker__icon.icon-yellow {
    background: #ffc100
}

.marker__icon.icon-green {
    background: #54d651
}

.menu {
    padding: .3125rem 0;
    font-size: .875rem
}

.menu .icon {
    font-size: 1rem;
    display: inline-block;
    margin-right: .3125rem;
    line-height: 1.125rem;
    vertical-align: top
}

.hasjs .menu.collapsed {
    display: none
}

.menu__item .menu {
    padding: 0
}

.menu__link {
    outline: 0;
    text-align: left;
    display: block;
    width: 100%;
    padding: .75rem .9375rem;
    line-height: 1.125rem;
    color: #555;
    border-left: 3px solid transparent;
    position: relative
}

.menu__link.highlight {
    background: #fbeff3
}

.menu__link.expandable:after {
    font-family: vj4icon;
    font-size: 1rem;
    content: "\EA19";
    position: absolute;
    right: 15px;
    top: 50%;
    line-height: 1;
    margin-top: -.5rem;
    transition: transform .2s cubic-bezier(.215,.61,.355,1);
    opacity: .85
}

a.menu__link.disabled,button.menu__link.disabled {
    cursor: default;
    opacity: .5
}

a.menu__link:hover,button.menu__link:hover {
    text-decoration: none
}

a.menu__link:not(.disabled):hover,button.menu__link:not(.disabled):hover {
    color: #555;
    background: #f4f4f4;
    border-color: #4690d0
}

a.menu__link.active,a.menu__link.active:hover,button.menu__link.active,button.menu__link.active:hover {
    border-color: #d11845;
    background: #ed5f82;
    color: #fff
}

.menu__item .menu .menu__link {
    padding-left: 1.5625rem
}

.menu__seperator {
    height: 1px;
    border-top: 1px solid #eee;
    margin: .3125rem 0
}

.messagepad__list-item {
    display: block;
    padding: 1.25rem .9375rem 1.25rem .8125rem;
    border-left: 2px solid transparent;
    cursor: pointer;
    transition: border-color .1s linear,background-color .1s linear;
    overflow: hidden;
    text-overflow: ellipsis
}

.messagepad__list-item:hover {
    border-color: #ddd;
    background: #f4f4f4;
    text-decoration: none
}

.messagepad__list-item.active {
    border-color: #ed5f82;
    background: rgba(237,95,130,.07)
}

.messagepad__desc {
    font-size: .8125rem;
    color: #888;
    max-height: 2em;
    margin-top: .3125rem;
    overflow: hidden;
    text-overflow: ellipsis;
    overflow-wrap: break-word;
    word-wrap: break-word;
    -ms-word-break: break-all;
    word-break: break-word;
    -ms-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto
}

.messagepad__message {
    overflow: hidden;
    display: flex;
    margin-bottom: 1.875rem
}

.messagepad__message:last-child {
    margin-bottom: 0
}

.messagepad__message.side--self {
    justify-content: flex-end
}

.messagepad__message__body {
    font-size: .875rem;
    line-height: 1.5;
    padding: .9375rem;
    margin-bottom: .5rem;
    position: relative;
    min-width: 6.25rem;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    word-wrap: break-word;
    -ms-word-break: break-all;
    word-break: break-word;
    -ms-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto
}

.messagepad__message__body time {
    opacity: .6;
    font-size: .8125rem
}

.messagepad__message__body:after {
    position: absolute;
    width: 0;
    height: 0;
    content: "";
    top: 0
}

.side--other .messagepad__message__body {
    margin-left: 1.25rem;
    background: #5f9fd6;
    color: #fff;
    order: 1
}

.side--other .messagepad__message__body:after {
    left: -.625rem;
    border-color: #5f9fd6 transparent transparent;
    border-style: solid;
    border-width: 10px 0 0 10px
}

.side--self .messagepad__message__body {
    margin-right: 1.25rem;
    background: #f0f0f0;
    color: #222;
    order: -1
}

.side--self .messagepad__message__body time {
    text-align: right
}

.side--self .messagepad__message__body:after {
    right: -.625rem;
    border-color: #f0f0f0 transparent transparent;
    border-style: solid;
    border-width: 10px 10px 0 0
}

#messagePad {
    min-height: 31.25rem
}

#messagePad,.messagepad {
    position: relative
}

.messagepad__sidebar {
    border-right: 1px solid #eee;
    float: left;
    width: 15.625rem
}

.messagepad__list {
    overflow: auto;
    height: 31.25rem
}

.messagepad__content {
    top: 0;
    bottom: 5rem;
    overflow: auto;
    padding: 1.875rem
}

.messagepad__content,.messagepad__input {
    position: absolute;
    left: 15.625rem;
    right: 0
}

.messagepad__input {
    display: none;
    bottom: 0;
    height: 80px;
    border-top: 1px solid #eee
}

.messagepad__input.visible {
    display: block
}

.messagepad__input button {
    display: block;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    position: absolute;
    right: 0;
    width: 3.125rem;
    top: 0;
    height: 100%;
    border: 0;
    background: none;
    text-align: center;
    line-height: 5rem;
    font-size: 1rem;
    transition: background-color .1s,color .1s,opacity .1s;
    transition-timing-function: linear;
    outline: 0
}

.messagepad__input button:enabled {
    cursor: pointer;
    background-color: #5f9fd6;
    color: #fff
}

.messagepad__input button:enabled:hover {
    background-color: #6fa9da
}

.messagepad__input button:disabled {
    color: #555;
    opacity: .3
}

.messagepad__textarea-container {
    position: absolute;
    left: .625rem;
    right: 3.75rem;
    top: .625rem;
    bottom: .625rem
}

.messagepad__textarea-container textarea {
    display: block;
    border: 0;
    background: none;
    padding: 0;
    width: 100%;
    height: 100%;
    font-size: .875rem;
    resize: none;
    outline: 0
}

.hamburger {
    padding: 0;
    display: inline-block;
    cursor: pointer;
    transition-property: opacity,filter;
    transition-duration: .15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible
}

.hamburger:hover {
    opacity: .7
}

.hamburger-box {
    width: 1.125rem;
    height: .75rem;
    display: inline-block;
    position: relative
}

.hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -.0625rem
}

.hamburger-inner,.hamburger-inner:after,.hamburger-inner:before {
    width: 1.125rem;
    height: .125rem;
    background-color: #fff;
    border-radius: 1px;
    position: absolute;
    transition-property: transform;
    transition-duration: .15s;
    transition-timing-function: ease
}

.layout--immersive .hamburger-inner,.layout--immersive .hamburger-inner:after,.layout--immersive .hamburger-inner:before {
    background-color: #fff
}

.hamburger-inner:after,.hamburger-inner:before {
    content: "";
    display: block
}

.hamburger-inner:before {
    top: -.3125rem
}

.hamburger-inner:after {
    bottom: -.3125rem
}

.hamburger--spin .hamburger-inner {
    transition-duration: .3s;
    transition-timing-function: cubic-bezier(.215,.61,.355,1)
}

.hamburger--spin .hamburger-inner:before {
    transition: top .1s ease-in .34s,opacity .1s ease-in
}

.hamburger--spin .hamburger-inner:after {
    transition: bottom .1s ease-in .34s,transform .3s cubic-bezier(.55,.055,.675,.19)
}

.hamburger--spin.is-active .hamburger-inner {
    transform: rotate(225deg);
    transition-delay: .14s;
    transition-timing-function: cubic-bezier(.215,.61,.355,1)
}

.hamburger--spin.is-active .hamburger-inner:before {
    top: 0;
    opacity: 0;
    transition: top .1s ease-out,opacity .1s ease-out .14s
}

.hamburger--spin.is-active .hamburger-inner:after {
    bottom: 0;
    transform: rotate(-90deg);
    transition: bottom .1s ease-out,transform .3s cubic-bezier(.215,.61,.355,1) .14s
}

.nav--placeholder {
    height: 45px
}

.nav {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 2.8125rem;
    font-size: .875rem;
    transition: background .2s;
    transition-timing-function: cubic-bezier(.215,.61,.355,1);
    z-index: 500
}

.hasjs .nav {
    position: fixed
}

.nojs .nav {
    box-shadow: 0 0 10px rgba(0,0,0,.4);
    margin-bottom: -2.8125rem;
    overflow: hidden
}

.nav>.row {
    transition: max-width .5s cubic-bezier(.215,.61,.355,1)
}

.nav--shadow {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 2.8125rem;
    z-index: 300;
    transition: box-shadow .2s;
    transition-timing-function: cubic-bezier(.215,.61,.355,1)
}

.nojs .nav--shadow {
    display: none
}

.nav__list,.nav__list-item {
    list-style: none
}

.nav__list--main {
    float: left
}

.nav__item {
    display: block;
    line-height: 2.4375rem;
    padding: 0 1.25rem .1875rem;
    border-top: 3px solid transparent;
    color: #fff;
    transition: border-color .2s,background .2s,color .2s;
    transition-timing-function: cubic-bezier(.215,.61,.355,1);
    position: relative
}

.nav__item:before {
    content: "";
    position: absolute;
    left: 0;
    top: -1px;
    width: 100%;
    height: 1px
}

.nav__item:active,.nav__item:visited {
    color: #fff
}

.nav__item.nav--active {
    border-color: #9ae3f3
}

.nav__item.nav--active:before {
    box-shadow: 0 0 30px #fff,0 0 30px #fff,0 0 30px #fff
}

.nav__item:hover {
    text-decoration: none;
    border-color: #bfd9ef;
    background: hsla(0,0%,100%,.3)
}

.nav__list--secondary {
    float: right
}

.nav__item--round {
    display: block;
    line-height: 1.75rem;
    margin: .40625rem 0;
    padding: 0 1.5625rem;
    border-radius: 1rem;
    color: #fff;
    border: 2px solid #fff;
    transition: background .2s,color .2s,border-color .2s;
    transition-timing-function: cubic-bezier(.215,.61,.355,1)
}

.nav__item--round:active,.nav__item--round:visited {
    color: #fff
}

.nav__item--round:hover {
    text-decoration: none;
    background: #fff;
    color: #666
}

.nav__list-item {
    float: left
}

.nav__list--main .nav__item--round {
    margin-right: .3125rem
}

.nav__list--secondary .nav__item--round {
    margin-left: .3125rem
}

.nav__logo {
    display: block;
    width: 0;
    opacity: 0;
    height: 1.4375rem;
    margin: .6875rem 0;
    background: url(/components/navigation/nav-logo-small_light.png?d89af9b245) no-repeat;
    transition: width .3s,opacity .3s;
    transition-timing-function: cubic-bezier(.215,.61,.355,1)
}

@media only screen and (-webkit-min-device-pixel-ratio: 1.5),only screen and (min-resolution:1.5dppx),only screen and (min-resolution:144dpi) {
    .nav__logo {
        background:url(/components/navigation/nav-logo-small@2x_light.png?13a52d1c64) no-repeat;
        background-size: 45px 23px
    }
}

.nav__logo:hover {
    text-decoration: none
}

@media only screen and (max-width: 600px) {
    .nav__logo {
        display:none
    }
}

.layout--immersive .nav__logo,.nav.showlogo .nav__logo {
    width: 3.4375rem;
    opacity: 1
}

.nav.floating,.nojs .nav {
    background: hsla(0,0%,100%,.98)
}

.nav.floating .nav__item,.nojs .nav .nav__item {
    color: #555
}

.nav.floating .nav__item.nav--active,.nojs .nav .nav__item.nav--active {
    border-color: #ed5f82
}

.nav.floating .nav__item.nav--active:before,.nojs .nav .nav__item.nav--active:before {
    box-shadow: 0 0 30px #ed5f82,0 0 30px #ed5f82
}

.nav.floating .nav__item:hover,.nojs .nav .nav__item:hover {
    border-color: #5f9fd6;
    background: #f8f8f8
}

.nav.floating .nav__item:hover:before,.nojs .nav .nav__item:hover:before {
    box-shadow: none
}

.nav.floating .nav__item--round,.nojs .nav .nav__item--round {
    border-color: #5f9fd6;
    color: #5f9fd6
}

.nav.floating .nav__item--round:hover,.nojs .nav .nav__item--round:hover {
    background-color: #5f9fd6;
    color: #fff
}

.nav.floating .nav__logo,.nojs .nav .nav__logo {
    background-image: url(/components/navigation/nav-logo-small_dark.png?2d48f1acff)
}

@media only screen and (-webkit-min-device-pixel-ratio: 1.5),only screen and (min-resolution:1.5dppx),only screen and (min-resolution:144dpi) {
    .nav.floating .nav__logo,.nojs .nav .nav__logo {
        background-image:url(/components/navigation/nav-logo-small@2x_dark.png?98f87ec4f3)
    }
}

.nav--shadow.floating {
    box-shadow: 0 0 6px rgba(0,0,0,.3)
}

@media only screen and (max-width: 600px) {
    .nav .columns {
        padding:0
    }

    .nav--shadow {
        display: none
    }

    .nav.slideout-menu {
        background: #1d1f20
    }

    .nav__list,.nav__list-item {
        float: none
    }

    .nav .dropdown-target.menu .menu__link,.nav__item,.nav__item--round,.nav__list--secondary .nav__item--round {
        line-height: 2.4375rem;
        padding: 0 1.25rem .1875rem;
        border: 0;
        border-left: 3px solid transparent;
        margin: 0;
        border-radius: 0;
        background: none;
        color: #fff
    }

    .nav .dropdown-target.menu .menu__link .icon,.nav__item--round .icon,.nav__item .icon,.nav__list--secondary .nav__item--round .icon {
        line-height: inherit
    }

    .nav .dropdown-target.menu .menu__link.nav--active,.nav__item--round.nav--active,.nav__item.nav--active,.nav__list--secondary .nav__item--round.nav--active {
        border-color: #ed5f82
    }

    .nav .dropdown-target.menu .menu__link:active,.nav .dropdown-target.menu .menu__link:visited,.nav__item--round:active,.nav__item--round:visited,.nav__item:active,.nav__item:visited,.nav__list--secondary .nav__item--round:active,.nav__list--secondary .nav__item--round:visited {
        background: none;
        color: #fff
    }

    .nav .dropdown-target.menu .menu__link:hover,.nav__item--round:hover,.nav__item:hover,.nav__list--secondary .nav__item--round:hover {
        border-color: #5f9fd6;
        background: hsla(0,0%,100%,.1);
        color: #fff
    }

    .nav__item:before {
        left: -2px;
        top: 0;
        height: 100%;
        width: 1px
    }

    .nav .dropdown-target.menu {
        display: block;
        background: none;
        border: 0;
        box-shadow: none
    }

    .nav .dropdown-target.menu .menu__link {
        padding-left: 2.1875rem
    }

    .nav .dropdown-target.menu .menu__seperator {
        display: none
    }

    .nav__list--secondary {
        border-top: 1px solid #666
    }
}

.notification {
    position: fixed;
    left: 1.25rem;
    bottom: 1.25rem;
    padding: .625rem;
    border-radius: .125rem;
    background: rgba(34,34,34,.9);
    color: #fff;
    font-size: .875rem;
    transition: transform .2s,opacity .2s;
    transition-timing-function: cubic-bezier(.215,.61,.355,1);
    z-index: 1000;
    line-height: 1.25rem;
    box-shadow: 0 4px 10px rgba(0,0,0,.4);
    min-width: 9.375rem
}

.notification.hide {
    opacity: 0;
    transform: translateY(20px) scale(.9)
}

.notification:before {
    display: inline-block;
    font-family: vj4icon!important;
    margin-right: .625rem;
    font-size: 1rem;
    line-height: 1;
    vertical-align: top;
    margin-top: .125rem
}

.notification.success {
    border-left: 5px solid #9bdb7b
}

.notification.success:before {
    color: #9bdb7b
}

.notification.info {
    border-left: 5px solid #78d6f4
}

.notification.info:before {
    color: #78d6f4
}

.notification.warn {
    border-left: 5px solid #fcd279
}

.notification.warn:before {
    color: #fcd279
}

.notification.error {
    border-left: 5px solid #fd848d
}

.notification.error:before {
    color: #fd848d
}

.notification.success:before {
    content: "\EA07"
}

.notification.info:before,.notification.warn:before {
    content: "\EA29"
}

.notification.error:before {
    content: "\EA0B"
}

@media only screen and (max-width: 600px) {
    .notification {
        padding:1.25rem .9375rem;
        left: 0;
        width: 100%;
        min-width: auto;
        bottom: 0
    }
}

#nprogress {
    pointer-events: none
}

#nprogress .bar {
    background: #fff;
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px
}

@media only screen and (min-width: 600px) {
    .nav--floating #nprogress .bar {
        background:#5f9fd6
    }
}

#nprogress .peg {
    display: block;
    position: absolute;
    right: 0;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px #fff,0 0 5px #fff;
    opacity: 1;
    transform: rotate(3deg) translateY(-4px)
}

@media only screen and (min-width: 600px) {
    .nav--floating #nprogress .peg {
        box-shadow:0 0 10px #5f9fd6,0 0 5px #5f9fd6
    }
}

#nprogress .spinner {
    display: block;
    position: fixed;
    z-index: 1031;
    top: .84375rem;
    right: .84375rem
}

#nprogress .spinner-icon {
    width: 1.125rem;
    height: 1.125rem;
    box-sizing: border-box;
    border-color: #fff transparent transparent #fff;
    border-style: solid;
    border-width: 2px;
    border-radius: 50%;
    -webkit-animation: nprogress-spinner .4s linear infinite;
    animation: nprogress-spinner .4s linear infinite
}

@media only screen and (min-width: 600px) {
    .nav--floating #nprogress .spinner-icon {
        border-top-color:#5f9fd6;
        border-left-color: #5f9fd6
    }
}

.nprogress-custom-parent {
    overflow: hidden;
    position: relative
}

.nprogress-custom-parent #nprogress .bar,.nprogress-custom-parent #nprogress .spinner {
    position: absolute
}

@-webkit-keyframes nprogress-spinner {
    0% {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(1turn)
    }
}

@keyframes nprogress-spinner {
    0% {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(1turn)
    }
}

.pager {
    margin-bottom: .625rem;
    border-top: 2px solid #e4e4e4;
    text-align: center;
    font-size: .8125rem
}

.pager:empty {
    display: none
}

.pager li {
    display: inline-block;
    margin: -2px 0 0
}

.pager__item {
    display: inline-block;
    padding: .625rem;
    text-decoration: none;
    border: 0;
    border-top: 2px solid #e4e4e4;
    transition: border-top .2s linear,color .2s linear
}

.pager__item,.pager__item.link,.typo .pager__item.link {
    color: #a7a7a7
}

.pager__item.link:hover {
    border-color: #5f9fd6;
    text-decoration: none
}

.pager__item.link:hover,.typo .pager__item.link:hover {
    color: #666
}

.pager__item.current {
    color: #ed5f82;
    border-color: #ed5f82
}

@media only screen and (max-width: 600px) {
    .pager__item.ellipsis,.pager__item.first,.pager__item.last,.pager__item.next,.pager__item.previous {
        display:none
    }
}

.problem__rp-tag {
    font-size: .8em;
    padding: 0 .3125rem;
    color: #aaa
}

.problem__tags {
    margin: 0!important;
    padding: 0!important;
    list-style: none!important;
    font-size: 0
}

.problem__tag {
    vertical-align: top;
    margin: 0 .125rem .125rem 0!important;
    padding: 0!important
}

.problem__tag,.problem__tag-link {
    display: inline-block;
    height: 1.625rem
}

.problem__tag-link {
    padding: 0 .4375rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 8.125rem;
    line-height: 1.625rem;
    background: #f0f0f0;
    color: #555!important;
    font-size: .8125rem
}

.problem__tag-link:hover {
    background: #5f9fd6;
    color: #fff!important;
    text-decoration: none
}

.col--problem-name .problem__tags {
    float: right
}

.col--problem-name .problem__tag {
    margin: 0 .125rem 0 0!important
}

.user-profile-avatar {
    border-radius: 50%
}

.user-profile-bg--1 {
    background-image: url(/components/profile/backgrounds/1.jpg?8dbcf29a94)
}

.user-profile-bg--thumbnail-1 {
    background-image: url(/components/profile/backgrounds/thumbnail/1.jpg?2daab30688)
}

.user-profile-bg--2 {
    background-image: url(/components/profile/backgrounds/2.jpg?d96653d68f)
}

.user-profile-bg--thumbnail-2 {
    background-image: url(/components/profile/backgrounds/thumbnail/2.jpg?6af526ab14)
}

.user-profile-bg--3 {
    background-image: url(/components/profile/backgrounds/3.jpg?a8a0b7a786)
}

.user-profile-bg--thumbnail-3 {
    background-image: url(/components/profile/backgrounds/thumbnail/3.jpg?a269cfd542)
}

.user-profile-bg--4 {
    background-image: url(/components/profile/backgrounds/4.jpg?521fee77d5)
}

.user-profile-bg--thumbnail-4 {
    background-image: url(/components/profile/backgrounds/thumbnail/4.jpg?9415fbe548)
}

.user-profile-bg--5 {
    background-image: url(/components/profile/backgrounds/5.jpg?6777f8e600)
}

.user-profile-bg--thumbnail-5 {
    background-image: url(/components/profile/backgrounds/thumbnail/5.jpg?df3afa6794)
}

.user-profile-bg--6 {
    background-image: url(/components/profile/backgrounds/6.jpg?8db91c028c)
}

.user-profile-bg--thumbnail-6 {
    background-image: url(/components/profile/backgrounds/thumbnail/6.jpg?68682fdc33)
}

.user-profile-bg--7 {
    background-image: url(/components/profile/backgrounds/7.jpg?ab7e538494)
}

.user-profile-bg--thumbnail-7 {
    background-image: url(/components/profile/backgrounds/thumbnail/7.jpg?5c735ac489)
}

.user-profile-bg--8 {
    background-image: url(/components/profile/backgrounds/8.jpg?fafc08cd28)
}

.user-profile-bg--thumbnail-8 {
    background-image: url(/components/profile/backgrounds/thumbnail/8.jpg?e5adaf0c73)
}

.user-profile-bg--9 {
    background-image: url(/components/profile/backgrounds/9.jpg?9ad082cfaf)
}

.user-profile-bg--thumbnail-9 {
    background-image: url(/components/profile/backgrounds/thumbnail/9.jpg?49c2f9b38b)
}

.user-profile-bg--10 {
    background-image: url(/components/profile/backgrounds/10.jpg?9742e2c784)
}

.user-profile-bg--thumbnail-10 {
    background-image: url(/components/profile/backgrounds/thumbnail/10.jpg?a021b79aa7)
}

.user-profile-bg--11 {
    background-image: url(/components/profile/backgrounds/11.jpg?e1efbad379)
}

.user-profile-bg--thumbnail-11 {
    background-image: url(/components/profile/backgrounds/thumbnail/11.jpg?31ab95bab1)
}

.user-profile-bg--12 {
    background-image: url(/components/profile/backgrounds/12.jpg?1f20165353)
}

.user-profile-bg--thumbnail-12 {
    background-image: url(/components/profile/backgrounds/thumbnail/12.jpg?a40d870f90)
}

.user-profile-bg--13 {
    background-image: url(/components/profile/backgrounds/13.jpg?ac96d15f10)
}

.user-profile-bg--thumbnail-13 {
    background-image: url(/components/profile/backgrounds/thumbnail/13.jpg?ba764eeeb0)
}

.user-profile-bg--14 {
    background-image: url(/components/profile/backgrounds/14.jpg?4ac2862c28)
}

.user-profile-bg--thumbnail-14 {
    background-image: url(/components/profile/backgrounds/thumbnail/14.jpg?b1e138e923)
}

.user-profile-bg--15 {
    background-image: url(/components/profile/backgrounds/15.jpg?3578977045)
}

.user-profile-bg--thumbnail-15 {
    background-image: url(/components/profile/backgrounds/thumbnail/15.jpg?21c9b5c387)
}

.user-profile-bg--16 {
    background-image: url(/components/profile/backgrounds/16.jpg?1effef3ab7)
}

.user-profile-bg--thumbnail-16 {
    background-image: url(/components/profile/backgrounds/thumbnail/16.jpg?62710cfa85)
}

.user-profile-bg--17 {
    background-image: url(/components/profile/backgrounds/17.jpg?fc81a6f493)
}

.user-profile-bg--thumbnail-17 {
    background-image: url(/components/profile/backgrounds/thumbnail/17.jpg?00a04b534d)
}

.user-profile-bg--18 {
    background-image: url(/components/profile/backgrounds/18.jpg?7a48f6cf5f)
}

.user-profile-bg--thumbnail-18 {
    background-image: url(/components/profile/backgrounds/thumbnail/18.jpg?48c422d184)
}

.user-profile-bg--19 {
    background-image: url(/components/profile/backgrounds/19.jpg?8de2b2f699)
}

.user-profile-bg--thumbnail-19 {
    background-image: url(/components/profile/backgrounds/thumbnail/19.jpg?52ab55c0ff)
}

.user-profile-bg--20 {
    background-image: url(/components/profile/backgrounds/20.jpg?1907aec8f8)
}

.user-profile-bg--thumbnail-20 {
    background-image: url(/components/profile/backgrounds/thumbnail/20.jpg?72ff3a21fe)
}

.user-profile-bg--21 {
    background-image: url(/components/profile/backgrounds/21.jpg?aa03ca936c)
}

.user-profile-bg--thumbnail-21 {
    background-image: url(/components/profile/backgrounds/thumbnail/21.jpg?f87765f508)
}

.user-profile-badge {
    display: inline-block;
    font-size: .75rem;
    padding: .1875rem .25rem;
    line-height: 1
}

.user-profile-badge:hover {
    text-decoration: none
}

.badge--mod {
    background-color: #cf70ab!important;
    color: #fff!important
}

.badge--lv0 {
    background-color: #efefef!important;
    color: #727171!important
}

.badge--lv1,.badge--lv2 {
    background-color: #9db4bd!important;
    color: #fff!important
}

.badge--lv3,.badge--lv4 {
    background-color: #73c3bc!important;
    color: #fff!important
}

.badge--lv5,.badge--lv6 {
    background-color: #81ba6c!important;
    color: #fff!important
}

.badge--lv7 {
    background-color: #f7b200!important;
    color: #fff!important
}

.badge--lv8 {
    background-color: #ff9251!important;
    color: #fff!important
}

.badge--lv9 {
    background-color: #eb6363!important;
    color: #fff!important
}

.badge--lv10 {
    background-color: #575757!important;
    color: #fff!important
}

.splitpane-fill {
    display: flex;
    position: absolute;
    overflow: hidden;
    left: 0;
    width: 100%;
    top: 0;
    height: 100%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.Resizer {
    background: #000;
    opacity: .2;
    z-index: 1;
    box-sizing: border-box;
    background-clip: padding-box
}

.Resizer.horizontal {
    height: 9px;
    margin: -4px 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    cursor: row-resize;
    width: 100%
}

.Resizer.vertical {
    width: 9px;
    margin: -4px;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    cursor: col-resize
}

.Resizer:hover {
    border-color: rgba(95,159,214,.3)
}

.record-status--text.pass {
    color: #25ad40!important
}

.record-status--text.fail {
    color: #fb5555!important
}

.record-status--text.progress {
    color: #f39800!important
}

.record-status--text.ignored,.record-status--text.pending {
    color: #9fa0a0!important
}

.record-status--icon {
    display: inline-block;
    width: 1.15em
}

.record-status--icon.pass:before {
    content: "\EA08";
    color: #25ad40
}

.record-status--icon.fail:before {
    content: "\EA0C";
    color: #fb5555
}

.record-status--icon.progress:before {
    content: "\EA28";
    color: #f39800
}

.record-status--icon.ignored:before {
    content: "\EA0C";
    color: #9fa0a0
}

.record-status--icon.pending:before {
    content: "\EA44";
    color: #9fa0a0
}

.record-status--border {
    border-left: .1875rem solid transparent
}

.record-status--border.pass {
    border-left: .1875rem solid #2ac649
}

.record-status--border.fail {
    border-left: .1875rem solid #fb6666
}

.record-status--border.progress {
    border-left: .1875rem solid #ffa50f
}

.record-status--border.ignored,.record-status--border.pending {
    border-left: .1875rem solid #a9aaaa
}

.record-status--background {
    color: #fff
}

.record-status--background.pass {
    background: #25ad40
}

.record-status--background.fail {
    background: #fb5555
}

.record-status--background.progress {
    background: #f39800
}

.record-status--background.ignored,.record-status--background.pending {
    background: #9fa0a0
}

.rotator {
    position: relative;
    height: 1em
}

.rotator__item {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: transform .2s,opacity .2s;
    transition-timing-function: cubic-bezier(.215,.61,.355,1)
}

.rotator__item.pos--above {
    transform: translateY(-100%);
    opacity: 0
}

.rotator__item.pos--below {
    transform: translateY(100%);
    opacity: 0
}

.scratchpad__data-input {
    border: 0;
    border-left: 3px solid #e0e0e0;
    background: #f8f8f8;
    padding: .5rem .25rem;
    font-family: monaco,Source Code Pro,Consolas,Lucida Console,"monospace";
    font-size: .875rem;
    outline: 0;
    resize: none;
    color: #666;
    height: 100%;
    width: 100%;
    transition: background-color .2s linear,border-color .2s linear
}

.scratchpad__data-input:focus {
    background: #fff;
    border-color: #cfe2f3
}

.ReactCodeMirror {
    flex: 1;
    position: relative;
    overflow: hidden
}

.cm-s-vjcm {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    font-family: monaco,Source Code Pro,Consolas,Lucida Console,"monospace";
    font-size: .875rem;
    line-height: 1.2
}

.cm-s-vjcm.CodeMirror-focused .CodeMirror-selected {
    background: #cee4f2
}

.cm-s-vjcm .CodeMirror-gutters {
    border-right: 0;
    background: none
}

.cm-s-vjcm .CodeMirror-linenumber {
    color: #ddd
}

.scratchpad__panel-title {
    background: #5f9fd6
}

.scratchpad__panel-button,.scratchpad__panel-title {
    line-height: 2.125rem;
    padding: 0 .3125rem;
    font-size: .8125rem;
    color: #fff
}

.scratchpad__panel-button {
    background: none;
    border: 0;
    margin: 0;
    cursor: pointer;
    outline: 0
}

.scratchpad__panel-button:hover {
    color: #fff170
}

.scratchpad__panel-tab {
    margin-top: -2.125rem
}

.scratchpad__panel-tab.rc-tabs-top,.scratchpad__panel-tab.rc-tabs-top .rc-tabs-bar {
    border: 0
}

.scratchpad__panel-tab .rc-tabs-bar {
    padding-left: 7.5rem
}

.scratchpad__panel-tab .rc-tabs-ink-bar {
    background: #fff170
}

.scratchpad__panel-tab .rc-tabs-tab-next-icon,.scratchpad__panel-tab .rc-tabs-tab-prev-icon {
    display: none;
    font-family: vj4icon!important;
    line-height: 2.125rem;
    font-size: 1rem;
    color: #fff
}

.scratchpad__panel-tab .rc-tabs-tab-arrow-show {
    display: block
}

.scratchpad__panel-tab.rc-tabs-top .rc-tabs-tab-prev-icon:before {
    content: "\EA09"
}

.scratchpad__panel-tab.rc-tabs-top .rc-tabs-tab-next-icon:before {
    content: "\EA0A"
}

.scratchpad__panel-tab .rc-tabs-content {
    flex: 1
}

.scratchpad__panel-tab .rc-tabs-tabpane {
    display: flex;
    flex-direction: column
}

.scratchpad__panel-tab.rc-tabs-top .rc-tabs-tab {
    padding: 0 .3125rem;
    line-height: 2.125rem;
    margin: 0 .3125rem 0 0;
    color: hsla(0,0%,100%,.8)
}

.scratchpad__panel-tab.rc-tabs-top .rc-tabs-tab-active,.scratchpad__panel-tab.rc-tabs-top .rc-tabs-tab-active:hover {
    color: #fff
}

.scratchpad__panel-tab .rc-tabs-bar,.scratchpad__panel-tab .rc-tabs-nav-container {
    line-height: 1;
    font-size: .8125rem
}

.scratchpad__panel-tab .rc-tabs-tab-btn-disabled {
    color: hsla(0,0%,100%,.7)
}

.scratchpad__panel-tab .rc-tabs-tabpane-hidden {
    display: none
}

.scratchpad__panel-tab .rc-tabs-tabpane {
    overflow: auto
}

.scratchpad__toolbar {
    background: #f2f6f7;
    padding: .5rem;
    font-size: .8125rem;
    font-weight: 400
}

.scratchpad__toolbar__item {
    margin-right: .3125rem
}

.scratchpad__toolbar__item .select {
    margin: 0;
    height: auto;
    line-height: 1
}

.scratchpad__toolbar__button {
    padding: .3125rem;
    font-size: .8125rem;
    font-weight: 400;
    background: none;
    border: 1px solid transparent;
    color: #8395a1;
    outline: 0;
    transition: opacity .2s linear
}

.scratchpad__toolbar__button>div {
    display: flex;
    flex-direction: row;
    align-items: center
}

.scratchpad__toolbar__button.enabled {
    cursor: pointer
}

.scratchpad__toolbar__button .icon {
    font-size: 1rem;
    margin-right: 2px
}

.scratchpad__toolbar__button.enabled:hover {
    color: #5a6b75;
    background: #e3e7e8
}

.scratchpad__toolbar__button.activated {
    color: #fff!important;
    background: #ed5f82!important
}

.scratchpad__toolbar__button.disabled {
    pointer-events: none;
    opacity: .3
}

.scratchpad__toolbar__split {
    width: 1px;
    height: 1rem;
    background: #ddd
}

.scratchpad__sidebar {
    z-index: 9999;
    opacity: 0;
    transition: opacity .2s linear;
    -webkit-mask-image: linear-gradient(180deg,#000,transparent 50%);
    mask-image: linear-gradient(180deg,#000,transparent 50%)
}

.scratchpad__sidebar.visible {
    opacity: .3
}

.scratchpad__sidebar:hover {
    opacity: 1;
    -webkit-mask-image: none;
    mask-image: none
}

.scratchpad-container {
    position: absolute;
    background: #fff
}

#scratchpad {
    top: 45px;
    bottom: 0
}

#scratchpad,.scratchpad__problem {
    position: absolute;
    left: 0;
    width: 100%
}

.scratchpad__problem {
    top: 0;
    height: 100%;
    overflow: auto
}

.scratchpad__toolbar__pretest.enabled:hover .icon {
    color: #ff4136
}

.scratchpad__toolbar__submit.enabled:hover .icon {
    color: #2ecc40
}

.scratchpad__records__table.loading {
    opacity: .6
}

.scratchpad__records__table .col--at {
    width: 7.5rem
}

.scratchpad__records__table .col--memory,.scratchpad__records__table .col--time {
    width: 4.375rem
}

.scratchpad__records__table .col--detail {
    border-right: 1px solid #e4e4e4
}

.scratchpad__records__table .icol {
    display: inline-block
}

.scratchpad__records__table .icol--pretest {
    width: 3.75rem
}

.scratchpad__records__table .icol--pretest .flag {
    font-size: .75rem;
    color: #fff;
    padding: .125rem .1875rem
}

.scratchpad__records__table .icol--stat {
    color: #aaa;
    width: 3.75rem
}

.dialog--signin__bg {
    background: rgba(0,0,0,.8);
    position: absolute;
    left: -1.875rem;
    top: 3.125rem;
    bottom: 3.125rem;
    right: -1.875rem;
    z-index: 1;
    box-shadow: 0 3px 10px rgba(0,0,0,.3)
}

.dialog--signin__main {
    background: #fff;
    width: 20rem;
    padding: 3.125rem;
    margin-right: 18.125rem;
    position: relative;
    z-index: 2;
    box-shadow: 0 0 30px rgba(0,0,0,.6)
}

.dialog--signin__side {
    position: absolute;
    right: 0;
    width: 20rem;
    padding: 0 3.125rem;
    transform: translateY(-50%);
    top: 50%;
    color: #ddd
}

.dialog--signin__side h1 {
    color: #fff
}

.dialog--signin__side p {
    margin: 1em 0;
    line-height: 1.2em
}

.dialog--signin__title {
    text-align: center;
    color: #7fb2de
}

.dialog--signin__note {
    margin: .3em 0 2em;
    text-align: center;
    font-size: .875rem
}

.dialog--signin__close-container {
    position: absolute;
    right: .9375rem;
    top: .9375rem
}

.star {
    border: 0;
    background: none;
    outline: 0;
    padding: 0;
    margin: 0;
    color: #aaa
}

.star .starred--show {
    display: none
}

.star .starred--hide {
    display: block
}

.star.activated {
    color: #ff851b
}

.star.activated .starred--show {
    display: block
}

.star.activated .starred--hide {
    display: none
}

.section__tab-item {
    margin: 1.25rem 0;
    border-bottom: 1px solid #ddd;
    padding: 0 .9375rem 1.5625rem
}

.section__tab-title {
    font-size: 1.25rem;
    color: #888;
    margin-bottom: .8em
}

.section__tab-header-wrapper {
    overflow: hidden
}

.section__tab-header {
    overflow-x: auto;
    white-space: nowrap;
    padding: .625rem .9375rem 20px;
    margin-bottom: -20px
}

@media only screen and (max-width: 600px) {
    .section__tab-header {
        padding-top:0;
        padding-right: 4.0625rem;
        webkit-overflow-scrolling: touch;
        -webkit-mask-image: linear-gradient(90deg,#000 80%,transparent);
        mask-image: linear-gradient(90deg,#000 80%,transparent)
    }
}

.section__tab-header-item {
    display: inline-block;
    font-size: .875rem;
    line-height: 2.1875rem;
    height: 2.1875rem;
    padding: 0 1.25rem;
    margin-right: .625rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: relative
}

@media only screen and (max-width: 600px) {
    .section__tab-header-item {
        line-height:2rem;
        height: 2rem
    }
}

.section__tab-container.immersive .section__tab-header-item {
    color: hsla(0,0%,100%,.9);
    border-radius: 1px 1px 0 0;
    cursor: pointer;
    transition: background .2s cubic-bezier(.215,.61,.355,1)
}

.section__tab-container.immersive .section__tab-header-item:hover {
    color: #fff
}

.section__tab-container.immersive .section__tab-header-item.selected {
    background: #fff;
    color: #666;
    box-shadow: 0 0 10px rgba(0,0,0,.3)
}

@media only screen and (max-width: 600px) {
    .section__tab-container.immersive .section__tab-header-item.selected {
        box-shadow:none;
        background: transparent;
        color: #fff
    }

    .section__tab-container.immersive .section__tab-header-item.selected:after {
        position: absolute;
        left: 0;
        width: 100%;
        bottom: 0;
        height: 3px;
        background: #ed5f82;
        content: ""
    }
}

.section__tab-content-wrapper {
    overflow: hidden
}

.section__tab-content {
    position: relative;
    white-space: nowrap
}

.section__tab-content .section__tab-main {
    display: none;
    vertical-align: top;
    width: 100%
}

.section__tab-content .section__tab-main.active {
    display: inline-block
}

.data-table {
    width: 100%;
    table-layout: fixed;
    white-space: nowrap;
    font-size: .8125rem;
    font-weight: 400
}

.data-table th {
    font-size: .875rem
}

.data-table tr {
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4
}

.data-table tr:nth-child(2n) {
    background: #f4f4f4
}

.data-table tr.highlight {
    background: #fae8ed
}

.data-table.is--full-row tr {
    cursor: pointer
}

.data-table.is--full-row tr:hover {
    background: #e7f1f9
}

.data-table thead>tr {
    color: #888;
    border-top: 0;
    border-bottom: 1px solid #e4e4e4
}

.data-table td,.data-table th {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.625rem
}

.data-table td {
    padding: .3125rem .625rem
}

.data-table th {
    padding: .8125rem .625rem
}

.data-table .empty-row {
    color: #aaa;
    font-size: .8125rem
}

.section__table-container {
    overflow: hidden
}

.section__table-header {
    background: hsla(0,0%,100%,.95);
    box-shadow: 0 .1875rem .125rem rgba(0,0,0,.03);
    position: relative;
    z-index: 100;
    transition: box-shadow .2s linear
}

.section__table-header thead>tr {
    border-bottom: 0
}

.section__table-header.is_stuck {
    box-shadow: 0 .125rem .3125rem rgba(0,0,0,.2)
}

.section__body>.data-table td:first-child,.section__body>.data-table th:first-child,.section__table-container>.data-table td:first-child,.section__table-container>.data-table th:first-child {
    padding-left: .9375rem
}

.section__body>.data-table td:last-child,.section__body>.data-table th:last-child,.section__table-container>.data-table td:last-child,.section__table-container>.data-table th:last-child {
    padding-right: .9375rem
}

.tooltip.drop-element {
    pointer-events: none
}

.tooltip .drop-content {
    transition: transform .1s ease-in-out;
    background: #333;
    color: #fff;
    font-size: .8125rem;
    padding: .7em .9em;
    max-width: 15.625rem;
    box-shadow: 1px 1px 4px rgba(0,0,0,.3);
    line-height: 1;
    position: relative
}

.tooltip .drop-content:before {
    content: "";
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border: .375rem solid transparent;
    pointer-events: none
}

.tooltip.drop-after-open,.tooltip.drop-after-open .drop-content {
    transition-delay: .4s
}

.tooltip.drop-element-attached-bottom.drop-element-attached-center .drop-content {
    transform: scale(.9) translateY(5px) translateZ(0)
}

.tooltip.drop-element-attached-bottom.drop-element-attached-left .drop-content {
    transform: scale(.9) translate(5px,5px) translateZ(0)
}

.tooltip.drop-element-attached-bottom.drop-element-attached-right .drop-content {
    transform: scale(.9) translate(-5px,5px) translateZ(0)
}

.tooltip.drop-element-attached-top.drop-element-attached-center .drop-content {
    transform: scale(.9) translateY(-5px) translateZ(0)
}

.tooltip.drop-element-attached-top.drop-element-attached-left .drop-content {
    transform: scale(.9) translate(5px,-5px) translateZ(0)
}

.tooltip.drop-element-attached-top.drop-element-attached-right .drop-content {
    transform: scale(.9) translate(-5px,-5px) translateZ(0)
}

.tooltip.drop-after-open .drop-content {
    transform: scale(1) translateZ(0)!important
}

.tooltip.drop-element-attached-bottom .drop-content {
    bottom: .625rem
}

.tooltip.drop-element-attached-bottom .drop-content:before {
    border-top-color: #333
}

.tooltip.drop-element-attached-top .drop-content {
    top: .625rem
}

.tooltip.drop-element-attached-top .drop-content:before {
    border-bottom-color: #333
}

.tooltip.drop-element-attached-bottom .drop-content:before {
    bottom: -.75rem
}

.tooltip.drop-element-attached-top .drop-content:before {
    top: -.75rem
}

.tooltip.drop-element-attached-center .drop-content:before {
    margin-left: -.375rem;
    left: 50%
}

.tooltip.drop-element-attached-left .drop-content:before {
    left: 0
}

.tooltip.drop-element-attached-right .drop-content:before {
    right: 0
}

.training-status--icon {
    display: inline-block;
    width: 1.15em
}

.training-status--icon.outside:before {
    content: "\EA26";
    color: #aaa
}

.training-status--icon.progress:before {
    content: "\EA44";
    color: #e64c72
}

.training-status--icon.done:before {
    content: "\EA08";
    color: #25ad40
}

.training-status--text.outside {
    color: #aaa
}

.training-status--text.progress {
    color: #e64c72
}

.training-status--text.done {
    color: #25ad40
}

.training-section-status--icon {
    display: inline-block;
    width: 1.15em
}

.training-section-status--icon.done:before {
    content: "\EA08";
    color: #25ad40
}

.training-section-status--icon.open:before {
    content: "\EA26"
}

.training-section-status--icon.progress:before {
    content: "\EA44";
    color: #e64c72
}

.training-section-status--icon.invalid:before {
    content: "\EA0C"
}

.training-section-status--text.done {
    color: #25ad40
}

.training-section-status--text.open,.training-section-status--text.progress {
    color: #e64c72
}

.training-section-status--text.invalid {
    color: #aaa
}

.page--contest_detail .col--status,.page--contest_detail .col--submit-at {
    width: 9.375rem
}

.page--contest_detail .col--problem {
    border-left: 1px solid #e4e4e4
}

@media only screen and (max-width: 600px) {
    .page--contest_detail .col--submit-at {
        display:none
    }
}

.page--contest_main .contest__title {
    font-size: 1.25rem;
    line-height: 1.2em;
    margin-bottom: .625rem
}

.page--contest_main .contest__date {
    margin-right: .625rem;
    white-space: nowrap
}

.page--contest_main .contest__info-attended {
    color: #25ad40
}

.page--contest_main .section--contest.live {
    background: #e98696;
    background-image: -webkit-radial-gradient(left top,ellipse farthest-corner,#e98696 0,#e96b6b 100%)
}

.page--contest_main .section--contest.ready {
    background: #469dcf;
    background-image: -webkit-radial-gradient(left top,ellipse farthest-corner,#8acde6 0,#469dcf 100%)
}

.page--contest_main .section--contest .status_title {
    display: inline-block;
    font-size: .875rem;
    color: #fff;
    background: rgba(0,0,0,.3);
    padding: .4375rem .625rem;
    border-radius: .125rem
}

.page--contest_main .section--contest h1 {
    line-height: 1.2;
    font-size: 1.5625rem;
    margin: 1.25rem 0
}

.page--contest_main .section--contest .info {
    color: #fff;
    font-size: .875rem
}

.page--contest_main .section--contest .info .icon {
    color: #ffeb81;
    font-size: 1rem
}

.page--contest_main .section--contest .info li {
    display: inline-block;
    margin-right: .625rem
}

.page--contest_main .section--contest .attandance {
    margin-top: .9375rem;
    font-size: .875rem;
    opacity: .8
}

.page--contest_main .section--contest .detail-button {
    cursor: pointer;
    display: block;
    text-align: center;
    background: #f6df45;
    color: #5a4f04;
    line-height: 2.5rem;
    border-radius: 1.25rem;
    width: 9.375rem;
    position: relative;
    overflow: hidden;
    transition: box-shadow .4s,background-color .4s;
    transition-timing-function: cubic-bezier(.215,.61,.355,1)
}

.page--contest_main .section--contest .detail-button:after {
    position: absolute;
    background: #fff;
    content: "";
    height: 6.25rem;
    left: -4.375rem;
    top: -1.5625rem;
    width: 3.125rem;
    opacity: .2;
    transform: rotate(35deg);
    transition: left .6s cubic-bezier(.215,.61,.355,1);
    z-index: 1
}

.page--contest_main .section--contest .detail-button:hover {
    text-decoration: none;
    box-shadow: 0 2px 20px rgba(246,223,69,.8);
    background: #f8e56a
}

.page--contest_main .section--contest .detail-button:hover:after {
    left: 150%
}

@media only screen and (max-width: 600px) {
    .page--contest_main .section--contest .media,.page--contest_main .section--contest .media__right,.page--contest_main .section--contest .media_body {
        display:block;
        padding: 0
    }

    .page--contest_main .section--contest .media__right .section__body {
        padding-top: 0
    }

    .page--contest_main .section--contest .detail-button {
        width: auto
    }
}

.page--contest_scoreboard .col--rank {
    width: 4.375rem;
    border-right: 1px solid #e4e4e4
}

.page--contest_scoreboard .col--user {
    width: 8.75rem
}

.page--contest_scoreboard .col--solved_problems,.page--contest_scoreboard .col--total_score,.page--contest_scoreboard .col--total_time_str {
    width: 6.25rem;
    text-align: center
}

.page--contest_scoreboard .col--problem_detail {
    border-left: 1px solid #e4e4e4;
    text-align: center
}

@media only screen and (max-width: 600px) {
    .page--contest_scoreboard .col--user {
        width:auto
    }

    .page--contest_scoreboard .col--problem_detail {
        display: none
    }
}

.page--discussion_detail .topic__content {
    margin: 1.25rem 0
}

.page--discussion_detail .profile__bg {
    background-size: cover;
    background-position: 50%;
    height: 3.75rem;
    margin-bottom: -2rem
}

.page--discussion_detail .sidebar-user-profile .media__body {
    padding-left: .625rem;
    padding-top: 1.25rem
}

.page--discussion_detail .sidebar-user-profile .user-profile-name {
    font-size: 1.2rem;
    color: #444;
    vertical-align: middle
}

.page--discussion_main .discussion__item,.page--discussion_node .discussion__item,.page--user_detail .discussion__item {
    border-left: .3125rem solid transparent;
    padding-left: .3125rem
}

.page--discussion_main .discussion__item.highlight,.page--discussion_node .discussion__item.highlight,.page--user_detail .discussion__item.highlight {
    border-left: .3125rem solid #df6589
}

.page--discussion_main .discussion__title,.page--discussion_node .discussion__title,.page--user_detail .discussion__title {
    font-size: 1.25rem;
    line-height: 1.2em;
    margin-bottom: .625rem
}

.page--discussion_main .discussion__title a:visited,.page--discussion_node .discussion__title a:visited,.page--user_detail .discussion__title a:visited {
    color: #bbb
}

.page--discussion_main .discussion__replies,.page--discussion_node .discussion__replies,.page--user_detail .discussion__replies {
    width: 4.375rem
}

.page--discussion_main .discussion-node__bg,.page--discussion_node .discussion-node__bg,.page--user_detail .discussion-node__bg {
    height: 0;
    box-sizing: content-box;
    padding-bottom: 40%;
    background-size: cover;
    background-position: 0;
    background-repeat: no-repeat
}

.page--discussion_main .discussion-node__bg.qa,.page--discussion_node .discussion-node__bg.qa,.page--user_detail .discussion-node__bg.qa {
    background-image: url(/pages/discussion_node_bg/nodes_qa.png?a0e72f98e7)
}

@media only screen and (-webkit-min-device-pixel-ratio: 1.5),only screen and (min-resolution:1.5dppx),only screen and (min-resolution:144dpi) {
    .page--discussion_main .discussion-node__bg.qa,.page--discussion_node .discussion-node__bg.qa,.page--user_detail .discussion-node__bg.qa {
        background-image:url(/pages/discussion_node_bg/nodes@2x_qa.png?9954456c50)
    }
}

.page--discussion_main .discussion-node__bg.share,.page--discussion_node .discussion-node__bg.share,.page--user_detail .discussion-node__bg.share {
    background-image: url(/pages/discussion_node_bg/nodes_share.png?edb26caaac)
}

@media only screen and (-webkit-min-device-pixel-ratio: 1.5),only screen and (min-resolution:1.5dppx),only screen and (min-resolution:144dpi) {
    .page--discussion_main .discussion-node__bg.share,.page--discussion_node .discussion-node__bg.share,.page--user_detail .discussion-node__bg.share {
        background-image:url(/pages/discussion_node_bg/nodes@2x_share.png?275989a62c)
    }
}

.page--discussion_main .discussion-node__bg.vijos,.page--discussion_node .discussion-node__bg.vijos,.page--user_detail .discussion-node__bg.vijos {
    background-image: url(/pages/discussion_node_bg/nodes_vijos.png?df62ea7704)
}

@media only screen and (-webkit-min-device-pixel-ratio: 1.5),only screen and (min-resolution:1.5dppx),only screen and (min-resolution:144dpi) {
    .page--discussion_main .discussion-node__bg.vijos,.page--discussion_node .discussion-node__bg.vijos,.page--user_detail .discussion-node__bg.vijos {
        background-image:url(/pages/discussion_node_bg/nodes@2x_vijos.png?fa1c8aa508)
    }
}

.page--discussion_main .discussion-node__bg.solution,.page--discussion_node .discussion-node__bg.solution,.page--user_detail .discussion-node__bg.solution {
    background-image: url(/pages/discussion_node_bg/nodes_solution.png?0554214b7f)
}

@media only screen and (-webkit-min-device-pixel-ratio: 1.5),only screen and (min-resolution:1.5dppx),only screen and (min-resolution:144dpi) {
    .page--discussion_main .discussion-node__bg.solution,.page--discussion_node .discussion-node__bg.solution,.page--user_detail .discussion-node__bg.solution {
        background-image:url(/pages/discussion_node_bg/nodes@2x_solution.png?bded9e3e07)
    }
}

.page--discussion_main .discussion-node__bg.advice,.page--discussion_node .discussion-node__bg.advice,.page--user_detail .discussion-node__bg.advice {
    background-image: url(/pages/discussion_node_bg/nodes_advice.png?83f224d086)
}

@media only screen and (-webkit-min-device-pixel-ratio: 1.5),only screen and (min-resolution:1.5dppx),only screen and (min-resolution:144dpi) {
    .page--discussion_main .discussion-node__bg.advice,.page--discussion_node .discussion-node__bg.advice,.page--user_detail .discussion-node__bg.advice {
        background-image:url(/pages/discussion_node_bg/nodes@2x_advice.png?77d9b1e4bd)
    }
}

@media only screen and (max-width: 1000px) {
    .page--discussion_main .discussion-node__bg,.page--discussion_node .discussion-node__bg,.page--user_detail .discussion-node__bg {
        display:none
    }
}

@media only screen and (min-width: 600px) {
    .page--domain_join .domain_join__container {
        width:31.25rem;
        margin: 3.125rem auto
    }
}

@media only screen and (min-width: 1000px) {
    .page--domain_join .domain_join__container {
        width:43.75rem
    }
}

.page--domain_manage_permission .col--p {
    width: 80px;
    text-align: center;
    border-left: 1px solid #e4e4e4
}

.page--domain_manage_permission td.col--description {
    padding-left: 1.875rem!important
}

.page--domain_manage_permission .col--family {
    line-height: 2;
    color: #fff;
    background: #72beff;
    border-top: 2px solid #5f9fd6
}

.page--domain_manage_role .col--checkbox {
    width: 60px
}

.page--domain_manage_role .col--id {
    width: 140px
}

.page--domain_manage_role .col--users {
    width: 100px
}

.page--domain_manage_user .col--checkbox {
    width: 60px
}

.page--domain_manage_user .col--uid {
    width: 100px
}

.page--domain_manage_user .col--role {
    width: 160px
}

.page--error .error__icon-container,.page--error .error__text-container {
    text-align: center;
    margin: 1.25rem 0
}

.page--error .error__text-container {
    color: #777;
    line-height: 1.5
}

.page--error .error__text-container h1 {
    font-size: 4rem;
    color: #999;
    margin-bottom: 1.25rem
}

.page--error .error__text-container li {
    list-style: decimal inside
}

.page--error .error__twd2 {
    background: url(/pages/error/twd2.svg?c5a15d0322) no-repeat;
    width: 270px;
    height: 270px;
    display: inline-block
}

@media only screen and (min-width: 600px) {
    .page--error .error__container {
        width:43.75rem;
        margin: 3.125rem auto;
        position: relative
    }

    .page--error .error__icon-container {
        float: left;
        width: 270px
    }

    .page--error .error__text-container {
        left: 20rem;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        text-align: left;
        margin: 0
    }
}

.page--home_account [name=form_item_background_img] .radiobox__image {
    width: 6.25rem;
    height: 3.875rem;
    background-size: 6.25rem 3.875rem
}

.page--home_domain .col--icon {
    width: 60px;
    line-height: 1
}

.page--home_domain .col--icon img {
    border-radius: 50%
}

.page--home_domain .col--role {
    width: 10rem;
    border-left: 1px solid #e4e4e4
}

.page--home_domain .col--action {
    width: 8.4375rem
}

@media only screen and (max-width: 600px) {
    .page--home_domain .col--icon,.page--home_domain .col--role {
        display:none
    }
}

.page--home_security .sessionlist {
    font-size: .875rem
}

.page--home_security .sessionlist__icon {
    font-size: 1.875rem;
    color: #888;
    margin: 0 1.25rem
}

.page--home_security .sessionlist__item {
    margin: .625rem 0;
    padding: .625rem 0;
    border-bottom: 1px solid #ddd
}

.page--home_security .sessionlist__item input {
    margin: 0
}

.page--home_security .sessionlist__current-session {
    line-height: 2.1875rem;
    color: #2ecc40
}

@media only screen and (max-width: 600px) {
    .page--home_security .sessionlist__item .media__left {
        display:none
    }

    .page--home_security .sessionlist__item .media__body,.page--home_security .sessionlist__item .media__right {
        display: block;
        padding: 0;
        margin: 0
    }
}

.page--homework_detail .col--status,.page--homework_detail .col--submit-at {
    width: 9.375rem
}

.page--homework_detail .col--problem {
    border-left: 1px solid #e4e4e4
}

@media only screen and (max-width: 600px) {
    .page--homework_detail .col--submit-at {
        display:none
    }
}

.page--homework_main .homework__title {
    line-height: 1.2em;
    margin-bottom: .625rem;
    font-size: 1.25rem
}

.page--homework_main .homework__info-attended {
    color: #25ad40
}

.page--homework_main .homework__date {
    margin-right: .625rem;
    white-space: nowrap
}

.page--homework_scoreboard .col--rank {
    width: 4.375rem;
    border-right: 1px solid #e4e4e4
}

.page--homework_scoreboard .col--user {
    width: 8.75rem
}

.page--homework_scoreboard .col--solved_problems,.page--homework_scoreboard .col--total_score,.page--homework_scoreboard .col--total_time_str {
    width: 6.25rem;
    text-align: center
}

.page--homework_scoreboard .col--problem_detail {
    border-left: 1px solid #e4e4e4;
    text-align: center
}

@media only screen and (max-width: 600px) {
    .page--homework_scoreboard .col--user {
        width:auto
    }

    .page--homework_scoreboard .col--problem_detail {
        display: none
    }
}

.page--problem_category .col--status,.page--problem_main .col--status {
    width: 9.375rem;
    position: relative
}

.page--problem_category .col--ac_rate,.page--problem_category .col--difficulty,.page--problem_category .col--submit_n,.page--problem_main .col--ac_rate,.page--problem_main .col--difficulty,.page--problem_main .col--submit_n {
    width: 4.375rem;
    text-align: center
}

.page--problem_category .col--status,.page--problem_main .col--status {
    border-right: 1px solid #e4e4e4
}

.page--problem_category .col--difficulty,.page--problem_category .col--submit_n,.page--problem_main .col--difficulty,.page--problem_main .col--submit_n {
    border-left: 1px solid #e4e4e4
}

@media only screen and (max-width: 600px) {
    .page--problem_category .col--difficulty,.page--problem_category .col--status,.page--problem_category .col--submit_n,.page--problem_main .col--difficulty,.page--problem_main .col--status,.page--problem_main .col--submit_n {
        display:none
    }

    .page--problem_category .col--ac_rate,.page--problem_main .col--ac_rate {
        border-left: 1px solid #e4e4e4
    }
}

.page--problem_category .widget--category-filter__category,.page--problem_main .widget--category-filter__category {
    margin-bottom: .375rem
}

.page--problem_category .widget--category-filter__category-tag,.page--problem_main .widget--category-filter__category-tag {
    display: inline-block;
    padding: .3125rem .375rem
}

.page--problem_category .widget--category-filter__category-tag:hover,.page--problem_main .widget--category-filter__category-tag:hover {
    color: #fff;
    background: #5f9fd6;
    text-decoration: none
}

.page--problem_category .widget--category-filter__category-tag.selected,.page--problem_main .widget--category-filter__category-tag.selected {
    color: #fff;
    background: #ed5f82
}

.page--problem_category .widget--category-filter__drop,.page--problem_main .widget--category-filter__drop {
    position: relative;
    font-size: .8125rem;
    width: 10.625rem;
    padding: .625rem;
    margin-right: .625rem;
    background: #fff;
    box-shadow: 0 .125rem .4375rem rgba(0,0,0,.3)
}

.page--problem_category .widget--category-filter__drop:before,.page--problem_main .widget--category-filter__drop:before {
    content: "";
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border-color: #fff transparent transparent #fff;
    border-style: solid;
    border-width: .25rem;
    box-shadow: -.125rem -.125rem .125rem rgba(0,0,0,.15);
    transform: rotate(135deg);
    transform-origin: 0 0;
    pointer-events: none;
    left: 100%;
    top: 50%;
    margin-left: .3125rem
}

.page--problem_category .widget--category-filter__subcategory,.page--problem_main .widget--category-filter__subcategory {
    margin: .125rem;
    display: inline-block
}

.page--problem_category .widget--category-filter__subcategory-tag,.page--problem_main .widget--category-filter__subcategory-tag {
    display: inline-block;
    padding: .3125rem .375rem
}

.page--problem_category .widget--category-filter__subcategory-tag:hover,.page--problem_main .widget--category-filter__subcategory-tag:hover {
    color: #fff;
    background: #5f9fd6;
    text-decoration: none
}

.page--problem_category .widget--category-filter__subcategory-tag.selected,.page--problem_main .widget--category-filter__subcategory-tag.selected {
    color: #fff;
    background: #ed5f82
}

.page--problem_category .drop-target-attached-right .widget--category-filter__drop,.page--problem_main .drop-target-attached-right .widget--category-filter__drop {
    margin-right: 0;
    margin-left: .625rem
}

.page--problem_category .drop-target-attached-right .widget--category-filter__drop:before,.page--problem_main .drop-target-attached-right .widget--category-filter__drop:before {
    transform-origin: 100% 0;
    transform: rotate(-45deg);
    left: auto;
    right: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-top: -.375rem
}

.page--problem_submit .col--status {
    width: 9.375rem
}

.page--problem_submit .col--submit-at {
    width: 10rem;
    text-align: center
}

@media only screen and (max-width: 600px) {
    .page--problem_submit .col--memory,.page--problem_submit .col--time {
        display:none
    }
}

.page--ranking_main .col--rank {
    width: 5.625rem;
    border-right: 1px solid #e4e4e4;
    text-align: center
}

.page--ranking_main .col--user {
    width: 16.25rem;
    border-right: 1px solid #e4e4e4
}

.page--ranking_main .col--accept,.page--ranking_main .col--rp {
    width: 5rem;
    border-right: 1px solid #e4e4e4;
    text-align: center
}

.page--record_detail .compiler-text {
    padding: 1.25rem 0;
    font-size: .8125rem
}

.page--record_detail .compiler-text:empty {
    display: none
}

.page--record_detail .col--case {
    width: 4.375rem
}

.page--record_detail .col--memory,.page--record_detail .col--time {
    width: 7.5rem
}

.page--record_detail .col--case,.page--record_detail .col--status {
    border-right: 1px solid #e4e4e4
}

@media only screen and (max-width: 600px) {
    .page--record_detail .col--case {
        display:none
    }

    .page--record_detail .col--time {
        width: 4.375rem
    }

    .page--record_detail .col--memory {
        width: 6.25rem
    }
}

.page--record_main .col--status {
    width: 10.625rem;
    position: relative
}

.page--record_main .col--submit-at {
    width: 7.5rem;
    text-align: center
}

.page--record_main.nojs .col--submit-at {
    width: 10rem
}

.page--record_main .col--submit-by {
    width: 7.5rem;
    text-align: right
}

.page--record_main .col--lang,.page--record_main .col--memory,.page--record_main .col--time {
    width: 6.25rem;
    text-align: center
}

.page--record_main .col--lang,.page--record_main .col--status,.page--record_main .col--submit-by {
    border-right: 1px solid #e4e4e4
}

.page--record_main .col--status__text {
    position: relative;
    z-index: 2
}

.page--record_main .col--status__progress-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1
}

.page--record_main .col--status__progress {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: #fff6d1
}

@media only screen and (min-width: 600px) and (max-width:1000px) {
    .page--record_main .col--lang,.page--record_main .col--memory,.page--record_main .col--time {
        display:none
    }
}

@media only screen and (max-width: 600px) {
    .page--record_main .col--lang,.page--record_main .col--memory,.page--record_main .col--submit-at,.page--record_main .col--submit-by,.page--record_main .col--time {
        display:none
    }
}

.page--training_detail .col--status {
    width: 9.375rem;
    position: relative
}

.page--training_detail .col--ac_rate,.page--training_detail .col--difficulty,.page--training_detail .col--submit_n {
    width: 4.375rem;
    text-align: center
}

.page--training_detail .col--status {
    border-right: 1px solid #e4e4e4
}

.page--training_detail .col--difficulty,.page--training_detail .col--submit_n {
    border-left: 1px solid #e4e4e4
}

@media only screen and (max-width: 600px) {
    .page--training_detail .col--difficulty,.page--training_detail .col--status,.page--training_detail .col--submit_n {
        display:none
    }

    .page--training_detail .col--ac_rate {
        border-left: 1px solid #e4e4e4
    }
}

.page--training_detail .training__section.invalid .training__problems {
    opacity: .6
}

.page--training_detail .training__section.collapsed .collapsed--hidden,.page--training_detail .training__section.collapsed .training__section__detail,.page--training_detail .training__section.expanded .expanded--hidden {
    display: none
}

.page--training_main .training__title {
    line-height: 1.2;
    margin-bottom: .4em;
    font-size: 1.25rem
}

.page--training_main .training__intro {
    color: #777;
    font-size: .875rem;
    margin: 1em 0
}

.page--training_main .training__item {
    padding-left: .3125rem
}

.page--training_main .training__participants {
    width: 5rem
}

.page--training_main .training__progress {
    line-height: 1.0625rem;
    vertical-align: top
}

.page--training_main .training__progress-bar {
    display: inline-block;
    width: 6.25rem;
    height: .3125rem;
    position: relative;
    background: #eee;
    margin: .375rem 0;
    line-height: 1;
    vertical-align: top
}

.page--training_main .training__progress-track {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0;
    background-color: #2ecc40
}

.page--training_main .secondary.training__list .training__item {
    margin-bottom: .9375rem
}

.page--training_main .secondary.training__list .training__title {
    font-size: 1rem
}

.page--training_main .secondary.training__list.my .training-status--icon {
    font-size: 1.2rem
}

.page--user_detail .profile-header {
    position: relative;
    background-position: 50%;
    background-size: cover;
    min-height: 16.875rem;
    padding-bottom: 4.0625rem
}

@media only screen and (max-width: 600px) {
    .page--user_detail .profile-header {
        padding-bottom:2rem
    }
}

.page--user_detail .profile-header__content {
    position: relative;
    padding: 1.5625rem .9375rem 0
}

.page--user_detail .profile-header__content .media__left {
    padding-right: 1.875rem
}

@media only screen and (max-width: 600px) {
    .page--user_detail .profile-header__content .media,.page--user_detail .profile-header__content .media__body,.page--user_detail .profile-header__content .media__left {
        display:block
    }

    .page--user_detail .profile-header__content .media__left {
        text-align: center
    }

    .page--user_detail .profile-header__content .media__left img {
        display: inline-block
    }

    .page--user_detail .profile-header__content .media__body {
        margin-top: 1.25rem
    }
}

.page--user_detail .profile-header__contact-bar {
    position: absolute;
    right: 1.25rem;
    top: 2.8125rem;
    color: #fff;
    text-align: right
}

@media only screen and (max-width: 1250px) {
    .page--user_detail .profile-header__contact-bar {
        position:relative;
        right: 0;
        top: 0;
        text-align: left;
        margin: .9375rem 0
    }
}

.page--user_detail .profile-header__contact-item {
    vertical-align: top;
    color: hsla(0,0%,100%,.8);
    margin-left: .625rem
}

@media only screen and (max-width: 1250px) {
    .page--user_detail .profile-header__contact-item {
        margin-left:0;
        margin-right: .9375rem
    }
}

.page--user_detail .profile-header__contact-item:hover {
    color: #fff;
    text-decoration: none
}

.page--user_detail .profile-header__contact-item.badge--mod {
    background-color: hsla(0,0%,100%,.8)!important;
    color: rgba(0,0,0,.8)!important
}

.page--user_detail .profile-header__main h1 {
    line-height: 40px;
    color: #fff
}

.page--user_detail .profile-header__main p {
    line-height: 30px;
    color: #fff
}

.page--user_detail .profile-header__main small {
    color: hsla(0,0%,100%,.8)
}

.page--user_detail .profile-content {
    position: relative;
    z-index: 2;
    margin-top: -2.8125rem
}

@media only screen and (max-width: 600px) {
    .page--user_detail .profile-content {
        margin-top:-2rem
    }
}

.page--user_detail .profile-content .section__tabs {
    padding-top: 2.8125rem
}

@media only screen and (max-width: 600px) {
    .page--user_detail .profile-content .section__tabs {
        padding-top:2rem
    }
}

.simplemde {
    border: 1px solid #ddd;
    margin: 0 0 1rem;
    position: relative;
    height: 12.5rem;
    box-sizing: border-box;
    overflow: hidden
}

.cm-s-simplemde {
    border: 0;
    min-height: 0;
    height: auto;
    padding: 0;
    top: 40px;
    bottom: 0;
    color: inherit
}

.cm-s-simplemde,.simplemde-toolbar {
    position: absolute;
    left: 0;
    width: 100%
}

.simplemde-toolbar {
    top: 0;
    border-radius: 0;
    border: 0;
    opacity: 0;
    background: #f2f6f7;
    transform: translateY(-20px);
    transition: opacity .5s,transform .5s;
    transition-timing-function: cubic-bezier(.215,.61,.355,1)
}

.simplemde-toolbar:hover {
    opacity: 1
}

.toolbar--visible .simplemde-toolbar {
    opacity: 1;
    transform: translateY(0)
}

.cm-s-simplemde .CodeMirror-scroll {
    height: 100%;
    min-height: 0;
    font-family: monaco,Source Code Pro,Consolas,Lucida Console,"monospace";
    color: #555
}

.simplemde-toolbar:after,.simplemde-toolbar:before {
    display: none
}

.simplemde-toolbar {
    padding: .3125rem
}

.simplemde-toolbar i.separator {
    border-right: 0
}

.simplemde-toolbar a {
    color: #8395a1!important;
    border: 0;
    background: none;
    border-radius: 0;
    font-size: 1rem;
    outline: 0
}

.simplemde-toolbar a:hover {
    background: #e3e7e8;
    color: #5a6b75!important;
    border: 0
}

.simplemde-toolbar a.active {
    background: #ed5f82;
    color: #fff!important;
    border: 0
}

.simplemde-toolbar.disabled-for-preview a:not(.no-disable) {
    background: none;
    opacity: .3
}

.cm-s-simplemde .CodeMirror-code .cm-comment {
    background: none
}

.simplemde-statusbar {
    display: none
}

.simplemde-preview {
    background: #fff
}

.no-heading .cm-s-simplemde .CodeMirror-code .cm-header-1,.no-heading .cm-s-simplemde .CodeMirror-code .cm-header-2,.no-heading .cm-s-simplemde .CodeMirror-code .cm-header-3,.no-heading .cm-s-simplemde .CodeMirror-code .cm-header-4 {
    font-size: 1em;
    line-height: 1.5
}

.picker__holder {
    margin-top: -1rem;
    border-radius: 0;
    transform: scale(.9) translateZ(0);
    transform-origin: 0 0;
    outline: 0;
    font-size: .875rem;
    transition: transform .1s ease-in-out,opacity .1s ease-in-out,max-height 0s .1s,border-width 0s .1s
}

.picker--opened .picker__holder {
    transform: scale(1) translateZ(0);
    transition: transform .1s ease-in-out,opacity .1s ease-in-out,max-height 0s,border-width 0s;
    box-shadow: $data-picker-shadow
}

.picker__list {
    padding: 0
}

.picker__list-item {
    border: 0
}

.picker__list-item:hover {
    background: #f0f0f0
}

.picker--focused .picker__list-item--selected,.picker__list-item--selected,.picker__list-item--selected:hover {
    background: #5f9fd6
}

.picker__day--infocus:hover,.picker__day--outfocus:hover {
    background: #f0f0f0
}

.picker__day--highlighted {
    border-color: transparent
}

.picker--focused .picker__day--highlighted,.picker__day--highlighted:hover {
    background: transparent
}

.picker--focused .picker__day--selected,.picker__day--selected,.picker__day--selected:hover {
    background: #5f9fd6
}

.picker__button--clear:focus,.picker__button--clear:hover,.picker__button--close:focus,.picker__button--close:hover,.picker__button--today:focus,.picker__button--today:hover {
    background: #f0f0f0;
    border-color: #f0f0f0
}

.picker__nav--next:hover,.picker__nav--prev:hover {
    background: #f0f0f0
}

.katex {
    font-size: 1em
}
