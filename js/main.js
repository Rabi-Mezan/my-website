

const detailsPage = document.getElementById('details-page');

function getPageName(id) {
    const pageName = document.getElementById(id);
    return pageName;
}

const aboutPage = getPageName('about');
aboutPage.addEventListener('click', function (event) {
    detailsPage.innerHTML = `
    <h2 class="page-title text-center">About Me</h2>
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
   
    <div class="mb-5">

    <h1 class="text-center page-title uppercase"><i
            class="fas fa-graduation-cap mr-2"></i>Ecademic
        Background</h1>
                        <ul class="timeline">

                            <!-- Item 1 -->
                            <li>
                                <div class="direction-r">
                                    <div class="flag-wrapper">
                                        <span class="flag">SSC</span>
                                        <span class="time-wrapper"><span class="time">2014</span></span>
                                    </div>
                                    <div class="desc">Garagonj Secondary High School</div>
                                </div>
                            </li>

                            <!-- Item 2 -->
                            <li>
                                <div class="direction-l">
                                    <div class="flag-wrapper">
                                        <span class="flag">HSC</span>
                                        <span class="time-wrapper"><span class="time">2016</span></span>
                                    </div>
                                    <div class="desc">Mia Jinaah Alom Degree College</div>
                                </div>
                            </li>

                            <!-- Item 3 -->
                            <li>
                                <div class="direction-r">
                                    <div class="flag-wrapper">
                                        <span class="flag">BSc in CSE</span>
                                        <span class="time-wrapper"><span class="time">2018-present</span></span>
                                    </div>
                                    <div class="desc">Daffodil International University</div>
                                </div>
                            </li>

                        </ul>

                        <h1 class="text-center page-title uppercase"><i class="fas fa-sticky-note mr-2"></i>Working
                            Experience</h1>
                        <ul class="timeline">

                            <!-- Item 4 -->
                            <li>
                                <div class="direction-l">
                                    <div class="flag-wrapper">
                                        <span class="flag">Junior Developer</span>
                                        <span class="time-wrapper"><span class="time">2021-present</span></span>
                                    </div>
                                    <div class="desc">I'm working as a junior web developer </div>
                                </div>
                            </li>

                            <!-- Item 5 -->
                            <li>
                                <div class="direction-r">
                                    <div class="flag-wrapper">
                                        <span class="flag">UI Design</span>
                                        <span class="time-wrapper"><span class="time">2021-present</span></span>
                                    </div>
                                    <div class="desc">I also work with UI design</div>
                                </div>
                            </li>

                            <!-- Item 6 -->
                            <li>
                                <div class="direction-l">
                                    <div class="flag-wrapper">
                                        <span class="flag">Front-End Developer</span>
                                        <span class="time-wrapper"><span class="time">2020-present</span></span>
                                    </div>
                                    <div class="desc">I am a front end web developer</div>
                                </div>
                            </li>

                        </ul>

                    </div>
                    <hr class="my-4 hr-line">
                    <footer class="mt-5">
                        <div class="text-center text-xs pb-8">
                            <small>Copyright © /devrabi/ 2021 All right reserved</small>
                        </div>
                    </footer>
    
    `

})
const portfolioPage = getPageName('portfolio');
portfolioPage.addEventListener('click', function (event) {

    detailsPage.innerHTML = `
    <h2 class="page-title text-center">My Portfolio</h2>
    <img src="images/Portfolio.png" class="lg:w-2/3 mx-auto" alt="">
    <p class="text-2xl pb-8 text-center text-yellow-500">This page is under construction</p>
    
    `

})
const blogPage = getPageName('blog');
blogPage.addEventListener('click', function (event) {

    detailsPage.innerHTML = `
    <h2 class="page-title text-center">My Blogs</h2>
    <img src="images/blog.png" class="lg:w-2/3 w-60 mx-auto" alt="">
    <p class="text-2xl pb-8 text-center text-yellow-500">This page is under construction</p>
    
    `

})
const contactPage = getPageName('contact');
contactPage.addEventListener('click', function (event) {

    detailsPage.innerHTML = `
    <section class="text-gray-600 body-font relative">
    <div class=" px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
        <img src="images/contact-us.png" class="lg:w-2/3 mx-auto" alt="">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 page-title">Contact Us
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">For any kind of support or
                information send us an email with your name and email id.</p>
        </div>
        <div class="lg:w-full md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                    <div class="relative">
                        <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                        <input type="text" id="name" name="name"
                            class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    </div>
                </div>
                <div class="p-2 w-1/2">
                    <div class="relative">
                        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email"
                            class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    </div>
                </div>
                <div class="p-2 w-full">
                    <div class="relative">
                        <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                        <textarea id="message" name="message"
                            class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                </div>
                <div class="p-2 w-full">
                    <button
                        class="flex mx-auto text-white  border-0 py-2 px-8 rounded text-lg send-btn">Send</button>
                </div>
                <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                    <a class="text-indigo-500">ravimezan@gmail.com</a>
                    <br>Dhaka , 1207 Bangladesh
                    </p>
                    <span class="inline-flex mt-4">
                        <a class="text-gray-500">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z">
                                </path>
                            </svg>
                        </a>
                        <a class="ml-4 text-gray-500">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                                </path>
                            </svg>
                        </a>
                        <a class="ml-4 text-gray-500">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="2" class="w-5 h-5"
                                viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01">
                                </path>
                            </svg>
                        </a>

                    </span>
                </div>
            </div>
        </div>
    </div>
</section>
    
    `

})