

const detailsPage = document.getElementById('details-page');

function getPageName(id) {
    const pageName = document.getElementById(id);
    return pageName;
}

const aboutPage = getPageName('about');
aboutPage.addEventListener('click', function (event) {
    detailsPage.innerHTML = `
    <h2 class="page-title">About Me</h2>
    <hr class="my-4 hr-line">
    <ul class="about-me">
        <li>
            <p>Name : <span>Rabiul Islam</span></p>
        </li>
        <li>
            <p>Birthday : <span>10 NOV, 1998</span></p>
        </li>
        <li>
            <p>Job : <span>Junior Developer</span></p>
        </li>
        <li>
            <p>Website : <span>www.devrabi.com</span></p>
        </li>
        <li>
            <p>Email : <span>ravimezan@gmail.com</span></p>
        </li>
        <li>
            <p>Nationality : <span>Bangladeshi</span></p>
        </li>
    </ul>
    <hr class="my-4 hr-line">
    <div class="note">
        <h2 class="page-title">I'm Junior Developer </h2>
        <p>When, while the lovely valley teems with vapour around me, and the meridian sun strikes the
            upper
            surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the
            inner
            sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie
            close
            to the earth, a thousand unknown plants are noticed by me.
            <br>
            <br>
            When I hear the buzz of the little world among the stalks, and grow familiar with the
            countless
            indescribable forms of the insects and flies, then I feel the presence of the Almighty, who
            formed us in his own image, and the breath of that universal love which bears and sustains
            us,
            as it floats around us in an eternity of bliss; and then, my friend, when darkness
            overspreads
            my eyes, and heaven and earth seem to dwell in my soul and absorb its power, like the form
            of a
            beloved mistress, then I often think with longing, Oh, would I could describe these
            conceptions,
            could impress upon paper all that is living so full and warm within me, that it might be the
            mirror of my soul, as my soul is the mirror of the infinite God!
        </p>
    </div>
    <!-- my skill progressbar -->
    <div class="mt-4 skills">
        <h2 class="page-title text-center">Professional Skills</h2>
        <div class="container mt-2">

            <!-- Creating a ui-widgets classes that  
                store other useful classes like  
                ui-values and ui-labels -->
            <div class="ui-widgets html">
                <div class="ui-values">85%</div>
                <div class="ui-labels">HTML</div>
            </div>

            <div class="ui-widgets css">
                <div class="ui-values">85%</div>
                <div class="ui-labels">CSS</div>
            </div>
            <div class="ui-widgets bootstarp">
                <div class="ui-values">90%</div>
                <div class="ui-labels">Bootsrtap</div>
            </div>
            <div class="ui-widgets js">
                <div class="ui-values">70%</div>
                <div class="ui-labels">JS</div>
            </div>
            <div class="ui-widgets react">
                <div class="ui-values">40%</div>
                <div class="ui-labels">React</div>
            </div>

            <div class="ui-widgets tailwind">
                <div class="ui-values">80%</div>
                <div class="ui-labels">Tailwind</div>
            </div>

        </div>
    </div>
    <!-- working are -->
    <h2 class="page-title text-center">Working Area</h2>
    <div class="working-area my-12">
        <div class="single-area">
            <span> <i class="fab fa-apple"></i></span>
            <h3>Application</h3>
            <p class="">I work with IOS </p>
        </div>
        <div class="single-area">
            <span> <i class="fas fa-desktop"></i></span>
            <h3>Web Design</h3>
            <p>I design website </p>
        </div>
        <div class="single-area">
            <span><i class="fas fa-image"></i></span>
            <h3>Illustration</h3>
            <p>I can make vector illustration </p>
        </div>
        <div class="single-area">
            <span><i class="fas fa-code"></i></span>
            <h3>Development</h3>
            <p>I am front-end developer </p>
        </div>
        <div class="single-area">
            <span><i class="fas fa-camera"></i></span>
            <h3>Photography</h3>
            <p>I love photography </p>
        </div>

    </div>

    <hr class="my-4 hr-line">

    <footer>
        <div class="text-center text-xs pb-8">
            <small>Copyright © /devrabi/ 2021 All right reserved</small>
        </div>
    </footer>

    `
})

const resumePage = getPageName('resume');
resumePage.addEventListener('click', function (event) {

    detailsPage.innerHTML = `
    <h2 class="page-title text-center">My Resume</h2>
    <p class="text-2xl pb-8 text-center text-yellow-500">This page is under construction</p>
    
    `

})
const portfolioPage = getPageName('portfolio');
portfolioPage.addEventListener('click', function (event) {

    detailsPage.innerHTML = `
    <h2 class="page-title text-center">My Portfolio</h2>
    <p class="text-2xl pb-8 text-center text-yellow-500">This page is under construction</p>
    
    `

})
const blogPage = getPageName('blog');
blogPage.addEventListener('click', function (event) {

    detailsPage.innerHTML = `
    <h2 class="page-title text-center">My Blogs</h2>
    <p class="text-2xl pb-8 text-center text-yellow-500">This page is under construction</p>
    
    `

})
const contactPage = getPageName('contact');
contactPage.addEventListener('click', function (event) {

    detailsPage.innerHTML = `
    <h2 class="page-title text-center">My Contact</h2>
    <p class="text-2xl pb-8 text-center text-yellow-500">This page is under construction</p>
    
    `

})