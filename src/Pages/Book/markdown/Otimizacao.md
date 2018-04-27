# Introdução à otimização
\
Otimização é o processo de melhorar outro processo. As pessoas otimizam quando vão ao supermercado e compram a maior quantidade de produtos gastando o mínimo possível. Um administrador realiza uma otimização quando escolhe a estratégia que rende mais lucros para sua empresa. Da mesma forma, um matemático realiza uma otimização quando encontra a solução que provê o menor valor possível para um modelo matemático.

Podemos expressar matematicamente o processo de otimização da seguinte forma:

$$\bm{x}^* = \underset{\bm{x}}{min} \ f(\bm{x})$$

onde $\bm{x}^*$ é o vetor solução que possui o menor valor para a função $f(\dot)$ para um determinado domínio.

Em *otimização contínua*, $\bm{x} \in \mathbb{R}^N$, onde $N$ é a dimensionalidade do domínio. Isto é, todas as dimensões de $\bm{x}$ podem assumir um valor real. Dentro do grupo de otimização contínua, se a função em questão é contínua em sua derivada (a continuidade em derivadas de ordem superior é necessária em alguns casos), temos um caso de *otimização suáve*. Nesse caso, é possível desenvolver algoritmos eficientes baseados em gradientes e hessianas, com rigorosas provas de convergências.

Caso alguma coordenada de $\bm{x}$ esteja restrita a ser um número inteiro, o problema em questão normalmente é muito mais complexo, sendo parte do domínio de *otimização inteira* (quando todas as variáveis são inteiras) ou *otimização inteira-mista* (quando algumas variáveis são inteiras e outras são reais). Como não é possível calcular derivadas de forma convencional para esse tipo de função, é necessário utilizar algoritmos especializados, baseados somente no valor da função objetivo.

Trataremos inicialmente da parte de otimização suáve, dado que a esmagadora parte da teoria de otimização e provas de convergência são baseadas em derivadas de primeira e segunda ordem (gradientes e hessianas).
