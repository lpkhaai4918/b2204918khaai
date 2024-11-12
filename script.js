
function calculate() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById('result').textContent = "Vui lòng nhập đầy đủ các hệ số!";
        return;
    }

  
    const delta = b * b - 4 * a * c;
    let resultText;

    
    if (delta < 0) {
        resultText = "Phương trình vô nghiệm.";
    } else if (delta === 0) {
        const x = -b / (2 * a);
        resultText = `Phương trình có nghiệm kép: x = ${x.toFixed(2)}`;
    } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        resultText = `Phương trình có hai nghiệm phân biệt: x₁ = ${x1.toFixed(2)}, x₂ = ${x2.toFixed(2)}`;
    }

    
    document.getElementById('result').textContent = resultText;
}
