<script>
    const textos = ["desarrollador", "programador", "diseñador"];
    let i = 0;
    let span = document.querySelector(".typing-text span");

    function escribir() 
        span.textContent = textos[i];
        i = (i + 1) % textos.length;
        setTimeout(escribir, 2000);
    

    escribir();
</script>
