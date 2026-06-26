const counters = document.querySelectorAll('.counter');

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = +counter.dataset.target;

            let current = 0;

            const increment = target / 100;

            const updateCounter = () => {

                if(current < target){

                    current += increment;

                    counter.innerText = Math.ceil(current);

                    requestAnimationFrame(updateCounter);

                }else{

                    if(target === 98){

                        counter.innerText = target + "%";
                    
                    }else{
                    
                        counter.innerText = target + "+";
                    
                    }

                }

            };

            updateCounter();

            observer.unobserve(counter);

        }

    });

});

counters.forEach(counter => {

    observer.observe(counter);

});