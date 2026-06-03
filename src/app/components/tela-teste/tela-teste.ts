import { DatePipe } from '@angular/common';
import { Component, computed, OnInit, signal, VERSION } from '@angular/core';

@Component({
  selector: 'app-tela-teste',
  imports: [DatePipe],
  templateUrl: './tela-teste.html',
  styleUrl: './tela-teste.scss',
})
export class TelaTeste implements OnInit {
  version = VERSION.full;
  dataAtual = signal(new Date());
  contador = signal(0);
  browserInfo = signal('');
  mensagemAPI = signal('');
  carregando = signal(false);

  botaoTexto = computed(() => (this.carregando() ? 'Carregando...' : '📡 Simular Requisição'));

  ngOnInit() {
    this.browserInfo.set(navigator.userAgent.split(' ').slice(-2).join(' '));

    // Atualizar data a cada segundo
    setInterval(() => {
      this.dataAtual.set(new Date());
    }, 1000);
  }

  incrementar() {
    this.contador.update((valor) => valor + 1);
  }

  resetar() {
    this.contador.set(0);
  }

  carregarDados() {
    console.log('🔵 Iniciando carregamento...');

    // Resetar estados usando signals
    this.carregando.set(true);
    this.mensagemAPI.set('');

    console.log('🟡 mensagemAPI limpa:', this.mensagemAPI());
    console.log('🟡 carregando:', this.carregando());

    setTimeout(() => {
      this.mensagemAPI.set('✅ Dados carregados com sucesso! Conexão funcionando perfeitamente.');
      this.carregando.set(false);

      setTimeout(() => {
        this.mensagemAPI.set('');
      }, 3000);
    }, 1500);
  }
}
