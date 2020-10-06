  let pronoun = ['the','our','all','many','some','whom','my','any'];
  let adj = ['great', 'big','clean','odd','fair','easy','dark'];
  let noun = ['jogger','racoon','industry','society','map','people'];
  let domExtensions = ['.com','.net','.org','.us','.io'];

  pronoun.forEach((pronouns) => {
      adj.forEach((adjective) => {
          noun.forEach((nouns) => {
              domExtensions.forEach((extensions) => {
                console.log(`${pronouns}${adjective}${nouns}${extensions}`);
              })
          })
      })
  })