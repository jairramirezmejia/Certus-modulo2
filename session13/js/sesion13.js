/* Ejercicio 1 */
const btn_sum_mul = document.getElementById('btn_sum_mul');
const p_sum_mul = document.getElementById('p_sum_mul');
btn_sum_mul.addEventListener('click', sumaYmul);
function sumaYmul(){
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    let suma = n1+n2 ;
    let producto = n1*n2;
    p_sum_mul.innerText =`Suma:${suma} y  Producto: ${producto}`;
}

/* Ejercicio 2 */
const btn_percent = document.getElementById('btn_percent');
const p_percent = document.getElementById('p_percent');
btn_percent.addEventListener('click', percent);
function percent(){
    const n3 = parseInt(document.getElementById('n3').value) || 0;
    let percent20 = n3*20/100 || 0;
    p_percent.innerText =`El 20% de ${n3} es ${percent20}`;
}

/* Ejercicio 3 */
const btn_cm_mm = document.getElementById('btn_cm_mm');
const p_cm_mm = document.getElementById('p_cm_mm');
btn_cm_mm.addEventListener('click', metersTo_cm_mm);
function metersTo_cm_mm(){
    const n4 = parseFloat(document.getElementById('n4').value) || 0;
    let cm = n4*100 || 0;
    let mm = n4*1000 || 0;
    p_cm_mm.innerText =`${n4}m es igual a ${cm}cm y ${mm}mm`;
}

/* Ejercicio 4 */
const btn_area = document.getElementById('btn_area');
const p_area = document.getElementById('p_area');
btn_area.onclick = function(){
    const base = parseFloat(document.getElementById('base').value);
    const altura = parseFloat(document.getElementById('altura').value);
    let area = base*altura/2 || 0;
    p_area.innerText =`El área del triángulo es ${area.toFixed(3)}`;
}

/* Ejercicio 5 */
const btn_soles = document.getElementById('btn_soles');
const p_soles = document.getElementById('p_soles');
btn_soles.addEventListener('click', dTo_soles);
function dTo_soles(){
    const dollars = parseFloat(document.getElementById('dollars').value) || 0;
    let soles = dollars*3.82 || 0;
    p_soles.innerText =`$/${dollars} = S/${soles.toFixed(2)} soles`;
}

/* Ejercicio 6 */
const btn_mm = document.getElementById('btn_mm');
const p_mm = document.getElementById('p_mm');
btn_mm.addEventListener('click', pTo_mm);
function pTo_mm(){
    const pulgadas = parseFloat(document.getElementById('pulgadas').value) || 0;
    let mm = pulgadas*25.4 || 0;
    p_mm.innerText =`${pulgadas} es igual a ${mm.toFixed(3)} mm`;
}

/* Ejercicio 7 */
const btn_cifras = document.getElementById('btn_cifras');
const p_cifras = document.getElementById('p_cifras');
btn_cifras.addEventListener('click', convertCifras);
function convertCifras(){
    const cifras = parseFloat(document.getElementById('cifras').value);
    let suma = cifras.toString().split('').map(Number).reduce(function (a, b) {
    return (a + b);
    }, 0);
    let exponent = Math.pow(suma, 2) || 0;
    p_cifras.innerText =`${exponent}`;
}

/* Ejercicio 8 */
const btn_d_percent = document.getElementById('btn_d_percent');
const p_d_percent = document.getElementById('p_d_percent');
btn_d_percent.addEventListener('click', monto_percent);
function monto_percent(){
    const dinero = parseFloat(document.getElementById('dinero').value);
    let A = dinero*30/100 || 0;
    let B = dinero*20/100 || 0;
    let C = dinero*50/100 || 0;
    p_d_percent.innerText =`Socio A: S/${A.toFixed(2)}; Socio B: S/${B.toFixed(2)} y Socio C: S/${C.toFixed(2)}`;
}

/* Ejercicio 9 */
const btn_p_final = document.getElementById('btn_p_final');
const p_p_final = document.getElementById('p_p_final');
btn_p_final.addEventListener('click', calcular);
function calcular(){
    const p_base = parseFloat(document.getElementById('p_base').value);
    let IGV = p_base*19/100 || 0;
    let p_final = p_base+IGV || 0 ;
    p_p_final.innerText =`El IGV es S/${IGV.toFixed(2)} y el precio final es S/${p_final.toFixed(2)}`;
}

/* Ejercicio 10 */
const btn_entradas = document.getElementById('btn_entradas');
const p_entradas = document.getElementById('p_entradas');
btn_entradas.addEventListener('click', entradas);
function entradas(){
    const e_g = parseInt(document.getElementById('e_g').value);
    const e_m_65 = parseInt(document.getElementById('e_m_65').value);
    const e_m = parseInt(document.getElementById('e_m').value);
    let e_g_v = e_g*150 || 0;
    let e_m_65_v = e_m_65*50 || 0;
    let e_m_v = e_m*80 || 0;
    let e_total = e_g_v+e_m_65_v+e_m_v;
    p_entradas.innerText =`Total entrada general: S/${e_g_v}; Total de entrada(+65): S/${e_m_65_v} y Total entrada(-18): S/${e_m_v}
    Total venta: S/${e_total}`;
}
