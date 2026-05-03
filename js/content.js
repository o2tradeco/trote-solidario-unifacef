const paginas = {
  1: {
    titulo: "O trote solidário",
    conteudo:
      "<p class='p-card'>" +
      "A proposta para este ano são ações voltadas à comunidade, desde o ingresso do estudante na IES. As dinâmicas do Trote Solidário serão desenvolvidas em 2 Etapas, com premiação em cada prova. Desse modo, para cada prova haverá medalhas para as equipes vencedoras em 1º, 2º e 3º lugar.<br><br>" +

      "Ressalta-se que as provas “Memórias Uni-FACEF”, “Álbum de Figurinhas Uni-FACEF” e “Ação em entidades Sociais” concederão uma medalha de honra ao mérito a cada uma das equipes que realizarem a tarefa proposta neste presente regulamento.<br><br>" +

      "A 1ª etapa se refere a “Gincana Solidária”, na qual os alunos serão divididos por departamento para cumprir as provas desta gincana. Contamos com <a class='text-link text-primary' href='pages/tasks.html'> 07 provas</a> nesta etapa.<br><br>" +

      "A 2ª etapa se refere à “Noite de Encerramento”, com algumas Gincanas, a Apresentação da Ação Social e a Apresentação Cultural. Além da divulgação dos resultados da Primeira Prova, as equipes serão avaliadas por Gincanas e Provas na noite, em busca de fortalecer o compromisso do Uni-FACEF com o Trote Solidário 2026." +
      "</p>"
  },
  2: {
    titulo: "Nosso objetivo",
    conteudo:
      "<p class='p-card'>" +
      "Destaca-se como objetivo do TROTE SOLIDÁRIO Uni-FACEF 2026: integrar os estudantes dos primeiros períodos de 2026 à comunidade acadêmica do Uni-FACEF, com ações que demonstram a solidariedade para com a sociedade.<br><br>" +

      "Esta é uma oportunidade para a comunidade acadêmica exercer atividades práticas no contexto de Objetivos de Desenvolvimento Sustentável (ODS) amplamente difundidos, no âmbito da Organização das Nações Unidas (ONU).<br><br>" +

      "Cada equipe deverá constituir uma comissão formada por 2 (dois) estudantes, que serão responsáveis por representar oficialmente a turma junto à Comissão Organizadora da Edição 2026 do Trote Solidário Uni-FACEF, bem como por transmitir todas as informações aos demais colegas.<br><br>" +

      "Além disso, cada equipe contará com 1 (um) padrinho, indicado pelos chefes de departamento. Os padrinhos serão responsáveis por orientar e conduzir as atividades e provas destinadas aos calouros, contando com o apoio dos demais docentes do curso." +
      "</p>"
  }
};

let index = 1;

function atualizar() {
  const pagina = paginas[index];

  document.getElementById("contentTitle").innerText = pagina.titulo;
  document.getElementById("contentDescription").innerHTML = pagina.conteudo;
}

function anterior() {
  if (index > 1) {
    index--;
    atualizar();
  }
}

function proximo() {
  if (index < Object.keys(paginas).length) {
    index++;
    atualizar();
  }
}

document.addEventListener("DOMContentLoaded", atualizar);