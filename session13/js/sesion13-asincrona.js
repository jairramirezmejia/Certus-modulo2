/* Ejercicio 1 */
const btn_promedio = document.getElementById('btn_promedio');
const p_promedio = document.getElementById('p_promedio');
btn_promedio.addEventListener('click', promedio);

function promedio(){
    const p_nota = parseFloat(document.getElementById('p_nota').value);
    const s_nota = parseFloat(document.getElementById('s_nota').value);
    const t_nota = parseFloat(document.getElementById('t_nota').value);
    let promedio_t = (p_nota+s_nota+t_nota)/3;
    p_promedio.innerText =`El promedio es: ${promedio_t.toFixed(3)}`;
}

/* Ejercicio 2 */
const btn_aumento = document.getElementById('btn_aumento');
const p_aumento = document.getElementById('p_aumento');
btn_aumento.addEventListener('click', aumento);
function aumento(){
    const p_sueldo = parseFloat(document.getElementById('p_sueldo').value);
    const s_sueldo = parseFloat(document.getElementById('s_sueldo').value);
    const t_sueldo = parseFloat(document.getElementById('t_sueldo').value);
    let aumento_a = p_sueldo*110/100;
    let aumento_b = s_sueldo*112/100;
    let aumento_c = t_sueldo*115/100;
    p_aumento.innerText =`Sueldo de A: S/${aumento_a}, Sueldo de B: S/${aumento_b} y Sueldo C: S/${aumento_c}`;
}

/* Ejercicio 3 */
const btn_c_final = document.getElementById('btn_c_final');
const p_c_final = document.getElementById('p_c_final');
btn_c_final.addEventListener('click', c_final);
function c_final(){
    const p_c_nota = parseFloat(document.getElementById('p_c_nota').value);
    const s_c_nota = parseFloat(document.getElementById('s_c_nota').value);
    const t_c_nota = parseFloat(document.getElementById('t_c_nota').value);
    let c_final_t = (p_c_nota*30/100)+(s_c_nota*30/100)+(t_c_nota*40/100);
    p_c_final.innerText =`Tu calificación final del curso es ${c_final_t}`;
}
