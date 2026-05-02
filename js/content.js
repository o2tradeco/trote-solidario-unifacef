const paginas = {
  1: {
    titulo: "Introdução",
    conteudo:
      "<p class='p-card'>" +

      "O Centro Universitário Municipal de Franca - Uni-FACEF, criado em 1951, como Faculdade de Ciências Econômicas é uma instituição pública, constituída como autarquia municipal, que foca suas ações no desenvolvimento científico e cultural, na formação com qualidade de profissionais de nível universitário, e também no fomento à promoção do progresso social e do bem comum.<br><br>" +

      "Ao longo dos seus 75 anos, o Uni-FACEF promove uma constante atualização de suas atividades pedagógicas, legitimando seu trabalho acadêmico científico, na formação de seus profissionais, proporcionando serviços de qualidade à sociedade. O propósito norteador do Uni-FACEF se refere à formação de cidadãos capacitados para a vida profissional e comunitária que, pelo saber e pelo ser, atuarão positivamente em vários segmentos e instituições sociais, colaborando para uma sociedade mais justa e solidária.<br><br>" +

      "Atualmente, são oferecidos treze cursos de graduação: Administração, Ciência da Computação, Ciências Contábeis, Comunicação Social com Habilitação em Publicidade e Propaganda, Enfermagem, Engenharia Civil, Engenharia de Produção, Engenharia de Software, Letras, Matemática, Medicina, Psicologia e Sistemas de Informação.<br><br>" +

      "O Uni-FACEF conta com professores mestres e doutores, todos concursados, para o atendimento anual de aproximadamente 2000 alunos, em sua área de atuação.<br><br>" +

      "E pensando na continuidade da formação, oferece, ainda, uma diversidade de cursos de pós-graduação Lato Sensu, com cursos de MBA e Especializações, e Stricto Sensu, com o Programa de Mestrado Interdisciplinar em Desenvolvimento Regional, reconhecido pela CAPES.<br><br>" +

      "Evidencia-se que os cursos do Uni-FACEF estão articulados com sua missão: “Construir e difundir o conhecimento, contribuindo para a formação do ser humano, a fim de que ele exerça o seu papel na sociedade com ética e cidadania”.<br><br>" +

      "Especificamente, corresponde com as finalidades a que se propõe:<br><br>" +

      "1) formar pessoas com habilidade tanto para um alto desempenho técnico-profissional, quanto para o exercício da cidadania, com uma vivência ética e participativa no mundo social;<br>" +
      "2) promover a construção do conhecimento, a sua transmissão crítica e a compreensão do mundo atual, particularmente no que se refere às necessidades nacionais e regionais;<br>" +
      "3) participar do desenvolvimento de condições e ações que evidenciem o “aprender a aprender” e promovam a educação continuada;<br>" +
      "4) partilhar, com toda a sociedade, da identificação, análise e busca de soluções dos problemas da comunidade.<br><br>" +

      "Nesse contexto, fomenta-se o Trote Solidário entre os calouros, como uma iniciativa institucional presente há mais de 30 anos, visando à inserção do discente no ambiente acadêmico, focando a promoção social, agregando em sua formação a importância de esforços que tornem suas decisões mais éticas e humanas." +

      "</p>"
  },
  2: {
    titulo: "Objetivo",
    conteudo:
        "<p class='p-card'>"  +
        "Destaca-se como objetivo do TROTE SOLIDÁRIO Uni-FACEF 2026: integrar os estudantes dos primeiros períodos de 2026 à comunidade acadêmica do Uni-FACEF, com ações que demonstram a solidariedade para com a sociedade.<br><br>" +

        "Esta é uma oportunidade para a comunidade acadêmica exercer atividades práticas no contexto de Objetivos de Desenvolvimento Sustentável (ODS) amplamente difundidos, no âmbito da Organização das Nações Unidas (ONU).<br><br>" +

        "Cada equipe deverá constituir uma comissão formada por 2 (dois) estudantes, que serão responsáveis por representar oficialmente a turma junto à Comissão Organizadora da Edição 2026 do Trote Solidário Uni-FACEF, bem como por transmitir todas as informações aos demais colegas.<br><br>" +

        "Além disso, cada equipe contará com 1 (um) padrinho, indicado pelos chefes de departamento. Os padrinhos serão responsáveis por orientar e conduzir as atividades e provas destinadas aos calouros, contando com o apoio dos demais docentes do curso." +
        "</p>"
    },
    3: {
    titulo: "Formato",
    conteudo:
        "<p class='p-card'>"  +
        "A proposta para este ano são ações voltadas à comunidade, desde o ingresso do estudante na IES. As dinâmicas do Trote Solidário serão desenvolvidas em 2 Etapas, com premiação em cada prova. Desse modo, para cada prova haverá medalhas para as equipes vencedoras em 1º, 2º e 3º lugar.<br><br>" +

        "Ressalta-se que as provas “Memórias Uni-FACEF”, “Álbum de Figurinhas Uni-FACEF” e “Ação em entidades Sociais” concederão uma medalha de honra ao mérito a cada uma das equipes que realizarem a tarefa proposta neste presente regulamento.<br><br>" +

        "A 1ª Etapa do Trote Solidário 2026 se refere a “Gincana Solidária”, na qual os alunos serão divididos por departamento para cumprir as provas desta gincana. Contamos com 07 provas nesta etapa, sendo elas: “Prova de arrecadação dos alimentos”, “Prova de arrecadação dos suplementos”, “Prova do leite”, “Prova de doações de sangue”, “Memórias Uni-FACEF”, “Ação em entidades sociais” e “Álbum de Figurinhas Uni-FACEF”.<br><br>" +

        "A 2ª Etapa do Trote Solidário 2026 se refere à “Noite de Encerramento”, com algumas Gincanas, a Apresentação da Ação Social e a Apresentação Cultural. Além da divulgação dos resultados da Primeira Prova, as equipes serão avaliadas por Gincanas e Provas na noite, em busca de fortalecer o compromisso do Uni-FACEF com o Trote Solidário 2026." +
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