
import { SpeedInsights } from "@vercel/speed-insights/next"

function acessarSistema() {
    const matricula = document.getElementById('matricula-input').value;
    if(matricula) {
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('app-content').classList.remove('hidden');
        document.getElementById('display-matricula').innerText = matricula;
    } else {
        alert("Por favor, informe a matrícula.");
    }
}

function switchForm(cor) {
    
    document.querySelectorAll('.form-section').forEach(form => {
        form.classList.remove('active-form');
    });
    
    document.getElementById('form-' + cor).classList.add('active-form');
}

function enviarSAP(tipo) {
    const mat = document.getElementById('display-matricula').innerText;
    alert(`Enviando para SAP...\nEtiqueta: ${tipo}\nMatrícula: ${mat}\nStatus: Processando Ordem.`);
}