
if (localStorage.getItem("submitted")) {
  alert("You have already submitted the test.");
  document.getElementById("quiz-form").style.display = "none";
  document.getElementById("result").textContent = "You have already submitted this test. Thank you!";
  document.getElementById("result").classList.remove("hidden");
} else {
  let timeLeft = 300;
  let timer = setInterval(() => {
    document.getElementById("time").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      document.getElementById("quiz-form").requestSubmit();
    }
    timeLeft--;
  }, 1000);

  document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault();
    clearInterval(timer);

    const answers = {
      q1: "b", q2: "c", q3: "a", q4: "b", q5: "c", q6: "a", q7: "b", q8: "b", q9: "c", q10: "b",
      q11: "b", q12: "b", q13: "b", q14: "b", q15: "c", q16: "c", q17: "c", q18: "b", q19: "a", q20: "a"
    };

    let score = 0;
    let total = Object.keys(answers).length;
    for (let q in answers) {
      const selected = document.querySelector(`input[name="${q}"]:checked`);
      if (selected && selected.value === answers[q]) {
        score++;
      }
    }

    const result = `You scored ${score} out of ${total}`;
    document.getElementById("result").textContent = result;
    document.getElementById("result").classList.remove("hidden");

    localStorage.setItem("submitted", true);
    document.getElementById("quiz-form").style.display = "none";
  });
}
