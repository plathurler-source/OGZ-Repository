const slides = document.getElementById('slides');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    const dots = document.getElementById('dots');
    const total = slides.children.length;
    let index = 0;

    //Create the dots
    for (let i=0;i<total;i++){
        const dot = document.createElement('span');
        dot.className='dot';
        if (i===0) dot.classList.add('active');
        dot.dataset.index=i;
        dots.appendChild(dot);
    }
    const update= () => {
        slides.style.transform = `translateX(-${index*100}%)`;
        [...dots.children].forEach((d,i)=>d.classList.toggle('active', i===index));
    };
    prev.addEventListener('click',()=>{
        index=(index-1+total)%total;
        update();
    });
    next.addEventListener('click',()=>{
        index=(index+1)%total;
        update();
    });
    dots.addEventListener('click', (e)=>{
        if (e.target.classList.contains('dot')){
            index=Number(e.target.dataset.index);
            update();
        }
    });

    //slide hareket fonsiyonlar//
    function nextSlide() {
        index = (index + 1) % total;
        update();
    }

    function prevSlide() {
        index = (index - 1 + total)% total;
        update();
    }

//autoplay kontrolü//
    let autoplay= true;
    let intervalId= null;

    function startAutoplay() {
        intervalId = setInterval(nextSlide, 4000);
    }

    function stopAutoplay() {
        clearInterval(intervalId);
    }

    const autoplayBtn = document.getElementById('toggle-autoplay');

    autoplayBtn.addEventListener('click', ()=> {
        autoplay=!autoplay;
        autoplayBtn.setAttribute('aria-pressed',autoplay);      

        if(autoplayBtn){
            autoplayBtn.setAttribute('aria-pressed','true');
            autoplayBtn.textContent = 'Pause slider';

        autoplayBtn.addEventListener('click',() => {
            autoplay = !autoplay;
            autoplayBtn.setAttribute('aria-pressed', String(autoplay))
        })

        if(autoplay){
            autoplayBtn.textContent = 'Pause slider';
            startAutoplay();
        } else {
            autoplayBtn.textContent = 'Play slider';
            stopAutoplay();
        }
    }});
    
    document.addEventListener('keydown', (e)=> {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
    });