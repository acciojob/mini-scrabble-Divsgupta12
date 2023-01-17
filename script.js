//your code here
let evaluatedText = document.getElementById('evaluatedText');
        let result = document.getElementById('letterCount');
        evaluatedText.addEventListener("input" , countword);
        function countword(){
            word = evaluatedText.value;
            result.innerHTML = word.length;
        }