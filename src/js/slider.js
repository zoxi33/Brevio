document.addEventListener("DOMContentLoaded", function () {
    const reviews = [
        {
            text: "Klimat tej kawiarni jest niepowtarzalny. Kawa smakuje wyjątkowo, a domowe wypieki sprawiają, że chce się tu wracać. Idealne miejsce na chwilę relaksu!",
            author: "Anna Kowalska",
            func: "Lojalna klientka Brevio"
        },
        {
            text: "Bardzo przytulne miejsce z miłą obsługą. Kawa jest przepyszna, a desery po prostu rozpływają się w ustach. Na pewno wrócę!",
            author: "Michał Nowak",
            func: "Stały bywalec"
        },
        {
            text: "Cudowna atmosfera i piękne wnętrze! Miejsce idealne na spotkanie z przyjaciółmi lub chwilę z książką przy dobrej kawie.",
            author: "Karolina Wiśniewska",
            func: "Miłośniczka kawy"
        },
        {
            text: "Najlepsza kawiarnia w mieście! Obsługa zawsze uśmiechnięta, a kawa smakuje jak we Włoszech! Polecam gorąco!",
            author: "Paweł Jankowski",
            func: "Kawosz z wyboru"
        },
        {
            text: "To miejsce to prawdziwy skarb! Piękny wystrój, świetna muzyka i niezapomniane smaki. Wrócę tu jeszcze nie raz!",
            author: "Ewa Malinowska",
            func: "Zadowolona klientka"
        }
    ];

    let currentIndex = 0;
    const reviewTextContainer = document.querySelector(".review-texts-container");
    const reviewAuthor = document.querySelector(".autor .name");
    const reviewFunc = document.querySelector(".autor .func");
    const leftBtn = document.querySelector(".left-btn");
    const rightBtn = document.querySelector(".right-btn");

    function updateReview(index) {
        reviewTextContainer.style.opacity = "0";
        setTimeout(() => {
            reviewTextContainer.textContent = reviews[index].text;
            reviewAuthor.textContent = reviews[index].author;
            reviewFunc.textContent = reviews[index].func;
            reviewTextContainer.style.opacity = "1";
        }, 300);
    }

    leftBtn.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
        updateReview(currentIndex);
    });

    rightBtn.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % reviews.length;
        updateReview(currentIndex);
    });

    updateReview(currentIndex);
});
