# Projeto em grupo para colocar em prática os conhecimento de html, css e JS

# Objetivo
Aplicar os conhecimentos de HTML, CSS e JS na construção de 
-  Páginas
-  Formulários
-  Listas
-  Tabelas
-  Validações
-  Armazenamento de dados no navegar
-  Consumo de API

# Atribuições da equipe
- Seguir os fluxos e padrões definidos neste README
- Sempre manter manter a tarefa atualiza com o link da PR nos comentários
- Fazer code review
- Manter a qualidade do código
- Auxiliar os membros da equipe para que todos consigam alcançar o objetivo da sprint

# Atribuições do líder da equipe
O lider vai ter a mesmas atribuições da equipe e 
- Fazer Garantia de qualidade para verificar se a tarefa atende aos requisitos
- Decidir se uma tarefa vai para coluna de produção ou para a coluna de retrabalho

# Branches
> Dica: Sempre antes de criar uma nova branch faça um git pull na branch de origem

## Branches principais
- `master`
  - Essa branch fica bloqueada, não pode receber push direto, apenas por meio de Pull Request
  - Só deve ser aberto um pull request para essa branch quando a tarefa chegar na coluna Produção
  - Nunca deve ser aberto uma Pull Request direto da branch staging para master.
- `staging`
  - Essa é a branch do ambiente de teste, essa branch deve ser configurada como a branch do github pages para podermos ver o projeto rodando.
  - Todas as tarefas precisam chegar nessa branch por meio de Pull request para poder ficar disponível na coluna de QA
- `Branch das tarefas`
  - Cada tarefa deve ser feita em uma branch separada e toda nova branch deve partir de staging

## Padrões de branch
> Fix: Correção
> 
> Feat: Nova Funcionalidade

A tarefa que tiver a etiqueta Fix deve ter uma branch com esse padrão de nome `fix-NUMERO-algomais`, e a tarefa com etiqueta Feat deve ter a branch com esse padrão de nome `feat-NUMERO-algomais`. 
O `algomais` fica livre para você colocar 2 ou 3 palavras relevantes sobre a tarefa.
O `NUMERO` pode ser encontrado no titulo da tarefa

- Exemplo:
  - Título da tarefa com etiqueta Fix: [99] Campo email do cadastro do usuário não está mais como obrigatório
  - Branch: fix-99-input-email-required

A mesma coisa serve para o Feat
- Exemplo:
  - Título da tarefa com etiqueta Feat: [04] Página de recuperação de senha
  - Branch: feat-04-recover-password

> Não precisa ser em inglês, mas os nomes da branch não podem ter acento nem espaços, se precisar separar palavras usar o hífen.

# Colunas no trello
- Todas as tarefas
  - Em resumo, essa coluna vai conter todas as tarefas que precisam ser feitas para entregar os projetos. Pode sofrer alterações e novas tarefas podem ser adicionadas antes da entrega final.
- Tarefas da sprint
  - Nesta coluna vai ficar as tarefas que precisam ser entregues em um determinado espaço de tempo. É muito importante que as tarefas aqui seja entregue até o prazo estipulado. 
- Em andamento
  - Quando a sprint iniciar qualquer desenvolvedor da equipe pode puxar uma tarefa para iniciar e colocar nesta coluna para informar que a tarefa está em andamento. É importante no trello definir o membro do cartão para informar quem está realizando a tarefa  
- Retrabalho
  - Essa coluna vai receber as tarefas que não passaram da coluna de Garantia de qualidade e precisa fazer ajustes.
  - Quando a tarefa entra nessa coluna, no final do nome da tarefa deve ser adicionado [R1]. A letra R é informando que a tarefa passou pela coluna de retrabalho e a número 1 é informando a quantidade de vezes. Ou seja, se uma mesma tarefa chegar na coluna de Garantia de qualidade e voltar para retrabalho 3 vezes, no final do título da tarefa deve ter [R3]
  - Tarefas da coluna de retrabalho devem seguir o fluxo normalmente, passando novamente pelas colunas de Revisão de código e Garantia de qualidade até chegar em produção
- Revisão de Código
  - Uma vez que o desenvolvedor finalizar uma tarefa em seu computador, o próximo passo é enviar sua branch para o github e abrir um Pull Request para a branch staging. Nesse momento, depois que a PR tiver aberta para staging a tarefa pode entra para a coluna de Code review
  - A tarefa nessa coluna é uma tarefa em que os outros desenvolvedores precisam revisar e aprovar a Pull Request no github
  - Uma vez que a PR estiver aprovada, o dono da tarefa pode realizar o merge para a branch staging
- Garantia de qualidade
  - Se uma tarefa chegou nesta coluna significa que ela já foi aprovado no Pull Request e já foi margeada na branch staging, então está disponível no github pages para ser testada e verificar se os requisitos da tarefa foram atendidos.
  - Caso algum requisito não tenha sido atendido, a tarefa deve entrar na coluna de Retrabalho
- Produção
  - Se na etapa de Garantia de qualidade estiver tudo certo a tarefa deve ser passada para esta coluna
  - A tarefa nesta coluna significa que pode ser enviada para a branch master, então o membro da tarefa deve abrir um Pull request da branch dessa tarefa para a branch master
  - O link da PR deve ser colocada nos comentários da tarefa
- Entregue
  - Em sala de aula vamos ver se a tarefa realmente foi concluído e aprovar a PR para poder fazer um merge em produção
  - A sprint so vai ser considerada como entregue se todas as tarefas chegarem nessa coluna
- Não entregue
  - Tarefas que passaram pela Garantia de qualidade e chegaram na coluna de produção porém não atende todos os requisitos
  - Quando uma tarefa chega nesse coluna uma outra tarefa deve ser aberto com a etiqueta **Fix** e adicionada na proxima sprint
 
  

# FAQ
1. O que é staging

A palavra staging significa encenação. Essa vai ser a branch que vai receber as tarefas concluídas antes de chegar em produção. Esse vai ser nosso ambiente de teste, onde as coisas podem quebrar e dar errado.
