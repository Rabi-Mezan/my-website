document.getElementById('resume').addEventListener('click', function (event) {
    const detailePage = document.getElementById('details-page');
    detailePage.innerHTML = `
   <h2 class="page-title">About Me</h2>
   <hr class="my-4 hr-line">
   <ul class="about-me">
       <li>
           <p>Full Name : <span>Rabiul Islam</span></p>
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
   `
})
document.getElementById('about').addEventListener('click', function (event) {
    const detailePage = document.getElementById('details-page');
    detailePage.innerHTML = `
    <div class="details-page w-full bg-white mt-14 shadow-md" id="details-page">
    <h2 class="page-title">About Me</h2>
    <hr class="my-4 hr-line">
    <ul class="about-me">
        <li>
            <p>Full Name : <span>Rabiul Islam</span></p>
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
        <h2 class="">I'm Junior Developer </h2>
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
</div>
   `
})