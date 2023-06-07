# Fronteend_GS


![image](https://github.com/FIAP-grupo-challenge/Fronteend_GS/assets/126498244/7273016d-833d-486d-8782-cc78ac7a31bc)
Sobre o projeto
Este Algoritmo Assincrono foi desenvolvido para tirar a carga de processamentos de dados da API deixando assim seu response time mais rapido

Deve ser usado em conjunto com a API

Areas que o Algoritmo Assincrono afeta:
* Banco de dados
Dependencias
Python-dotenv : python-dotenv é uma biblioteca em Python que permite carregar variáveis de ambiente de um arquivo .env para facilitar a configuração de uma aplicação.
Psycopg2-binary : psycopg2 é uma biblioteca em Python que fornece uma interface para se conectar e interagir com bancos de dados PostgreSQL. Estamos utilzando a versão "binary" Para evitar problemas de compatibilidade com a biblioteca Flask
Instalação
Clonar o respositorio
git clone https://github.com/FIAP-grupo-challenge/Python_algoritimo_assincrono_GS
Instalar dependencias
pip install -r requirements.txt
rodar arquivo run.py
Funcionalidades
Este Algoritimo preve a atualização dos campos status e warnings de cada planta individual no banco de dados, devido a grande carga de dados e uma necessidade de executar esse codigo em curtos intervalos de tempo para que haja uma boa experiencia do cliente. Decidimos optar pelo modelo Assincrono, isto é, opera de modo independente das outras funcionladiades, sem precisar de chamadas ou imputs (com exeção do banco de dados)

Funcionamento
puxamos os dados da planta do banco de dados, verificamos seu ultimo registro com informações do ambiente, e fazemos diversas comparações dinamicas para determinar a saude da planta de acordo com as leituras dos scensores arduino, e com o seu tipo (Tomate, Pimentão, Abobrinha, Alface, Rúcula, Espinafre, Feijão, Ervilha, Lentilha, Cenoura, Beterraba, Rabanete) São os inclusos atualmente neste algoritimo.
Documentação referencia, Formulas das comparações.

Banco de dados
Para uma documentação mais completa do Banco visite o respositorio Banco de Dados

O banco de dados escolhido para esta aplicação foi PostgreSQL

Motivos desta escolha:

* Maturidade e estabilidade: O PostgreSQL tem uma história de desenvolvimento longa e bem estabelecida, remontando a mais de 30 anos. Ele é conhecido por sua confiabilidade, robustez e estabilidade, sendo amplamente utilizado em ambientes de produção exigentes.
* Suporte a SQL completo: O PostgreSQL adere estritamente aos padrões ANSI SQL e oferece suporte a um amplo conjunto de recursos SQL, incluindo subconsultas, junções complexas, desencadeadores (triggers), procedimentos armazenados e muito mais. Isso torna o PostgreSQL altamente compatível com outras bases de dados e facilita a migração de aplicativos de outros sistemas de gerenciamento de banco de dados.
* Extensibilidade: O PostgreSQL é altamente extensível, permitindo que os usuários adicionem novos tipos de dados, funções, operadores e até mesmo recursos personalizados por meio de extensões. Além disso, ele suporta várias linguagens de programação (como PL/pgSQL, PL/Python, PL/Java) para escrever procedimentos armazenados e funções personalizadas.
* Recursos avançados: O PostgreSQL possui uma ampla gama de recursos avançados, incluindo suporte a transações ACID (Atomicidade, Consistência, Isolamento e Durabilidade), replicação síncrona e assíncrona, particionamento de tabelas, índices avançados (como índices GIN e GiST para pesquisa de texto completo e dados geométricos), entre outros. Esses recursos fornecem flexibilidade e desempenho aprimorado para uma variedade de casos de uso.
* Suporte a dados geoespaciais: O PostgreSQL possui suporte nativo a dados geoespaciais, permitindo a realização de consultas e operações complexas em dados com componentes espaciais. Isso é particularmente útil para aplicativos de mapeamento, sistemas de informação geográfica (GIS) e análises baseadas em localização.
* Comunidade ativa: O PostgreSQL possui uma comunidade de usuários ativa e engajada, que contribui com melhorias, correções de bugs e desenvolvimento contínuo do sistema. Essa comunidade vibrante resulta em um software de alta qualidade, suporte técnico abrangente e ampla disponibilidade de recursos e tutoriais online.
* Licença de código aberto: O PostgreSQL é distribuído sob a licença PostgreSQL, que é uma licença de código aberto. Isso significa que você pode usá-lo, modificá-lo e distribuí-lo gratuitamente, além de ter acesso ao código-fonte completo. A licença de código aberto promove a transparência, flexibilidade e independência em relação a um fornecedor específico.


Conexão da API com o Banco:

A conexão é feita por meio da biblioteca do Python psycopg2 utilizando a URL de conexão como parametro


Credenciais de conexão:

A credencial de conexão via URL se encontra no arquivo .env


Hospedagem do banco de dados:

O banco de dados atualmente se econtra hospedado com o serviço gratuito ElephantSQL

Desenvolvedores
Nome: Lucas Fernandes Joaquim, RM: 551313
Nome: Gustavo Ferreira Lopes, RM: 98887
Nome: heitor freire dos anjos, RM: 552165
Nome: Rodrigo Fernandes dos Santos, RM: 98896
Nome: Enzo Silva Cataldi, RM: 99826
Sobre o projeto
Este Algoritmo Assincrono foi desenvolvido para tirar a carga de processamentos de dados da API deixando assim seu response time mais rapido

Deve ser usado em conjunto com a API

Areas que o Algoritmo Assincrono afeta:
* Banco de dados
Dependencias
Python-dotenv : python-dotenv é uma biblioteca em Python que permite carregar variáveis de ambiente de um arquivo .env para facilitar a configuração de uma aplicação.
Psycopg2-binary : psycopg2 é uma biblioteca em Python que fornece uma interface para se conectar e interagir com bancos de dados PostgreSQL. Estamos utilzando a versão "binary" Para evitar problemas de compatibilidade com a biblioteca Flask
Instalação
Clonar o respositorio
git clone https://github.com/FIAP-grupo-challenge/Python_algoritimo_assincrono_GS
Instalar dependencias
pip install -r requirements.txt
rodar arquivo run.py
Funcionalidades
Este Algoritimo preve a atualização dos campos status e warnings de cada planta individual no banco de dados, devido a grande carga de dados e uma necessidade de executar esse codigo em curtos intervalos de tempo para que haja uma boa experiencia do cliente. Decidimos optar pelo modelo Assincrono, isto é, opera de modo independente das outras funcionladiades, sem precisar de chamadas ou imputs (com exeção do banco de dados)

Funcionamento
puxamos os dados da planta do banco de dados, verificamos seu ultimo registro com informações do ambiente, e fazemos diversas comparações dinamicas para determinar a saude da planta de acordo com as leituras dos scensores arduino, e com o seu tipo (Tomate, Pimentão, Abobrinha, Alface, Rúcula, Espinafre, Feijão, Ervilha, Lentilha, Cenoura, Beterraba, Rabanete) São os inclusos atualmente neste algoritimo.
Documentação referencia, Formulas das comparações.

Banco de dados
Para uma documentação mais completa do Banco visite o respositorio Banco de Dados

O banco de dados escolhido para esta aplicação foi PostgreSQL

Motivos desta escolha:

* Maturidade e estabilidade: O PostgreSQL tem uma história de desenvolvimento longa e bem estabelecida, remontando a mais de 30 anos. Ele é conhecido por sua confiabilidade, robustez e estabilidade, sendo amplamente utilizado em ambientes de produção exigentes.
* Suporte a SQL completo: O PostgreSQL adere estritamente aos padrões ANSI SQL e oferece suporte a um amplo conjunto de recursos SQL, incluindo subconsultas, junções complexas, desencadeadores (triggers), procedimentos armazenados e muito mais. Isso torna o PostgreSQL altamente compatível com outras bases de dados e facilita a migração de aplicativos de outros sistemas de gerenciamento de banco de dados.
* Extensibilidade: O PostgreSQL é altamente extensível, permitindo que os usuários adicionem novos tipos de dados, funções, operadores e até mesmo recursos personalizados por meio de extensões. Além disso, ele suporta várias linguagens de programação (como PL/pgSQL, PL/Python, PL/Java) para escrever procedimentos armazenados e funções personalizadas.
* Recursos avançados: O PostgreSQL possui uma ampla gama de recursos avançados, incluindo suporte a transações ACID (Atomicidade, Consistência, Isolamento e Durabilidade), replicação síncrona e assíncrona, particionamento de tabelas, índices avançados (como índices GIN e GiST para pesquisa de texto completo e dados geométricos), entre outros. Esses recursos fornecem flexibilidade e desempenho aprimorado para uma variedade de casos de uso.
* Suporte a dados geoespaciais: O PostgreSQL possui suporte nativo a dados geoespaciais, permitindo a realização de consultas e operações complexas em dados com componentes espaciais. Isso é particularmente útil para aplicativos de mapeamento, sistemas de informação geográfica (GIS) e análises baseadas em localização.
* Comunidade ativa: O PostgreSQL possui uma comunidade de usuários ativa e engajada, que contribui com melhorias, correções de bugs e desenvolvimento contínuo do sistema. Essa comunidade vibrante resulta em um software de alta qualidade, suporte técnico abrangente e ampla disponibilidade de recursos e tutoriais online.
* Licença de código aberto: O PostgreSQL é distribuído sob a licença PostgreSQL, que é uma licença de código aberto. Isso significa que você pode usá-lo, modificá-lo e distribuí-lo gratuitamente, além de ter acesso ao código-fonte completo. A licença de código aberto promove a transparência, flexibilidade e independência em relação a um fornecedor específico.


Conexão da API com o Banco:

A conexão é feita por meio da biblioteca do Python psycopg2 utilizando a URL de conexão como parametro


Credenciais de conexão:

A credencial de conexão via URL se encontra no arquivo .env


Hospedagem do banco de dados:

O banco de dados atualmente se econtra hospedado com o serviço gratuito ElephantSQL

Desenvolvedores
Nome: Lucas Fernandes Joaquim, RM: 551313
Nome: Gustavo Ferreira Lopes, RM: 98887
Nome: heitor freire dos anjos, RM: 552165
Nome: Rodrigo Fernandes dos Santos, RM: 98896
Nome: Enzo Silva Cataldi, RM: 99826
