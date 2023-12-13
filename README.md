# Projeto: Integração Vertical e Horizontal entre ADS e Mecatrônica para o Desenvolvimento do Sistema "Anti Cochilo"
Este repositório foi criado como parte fundamental do projeto que busca integrar os conhecimentos das áreas de Análise e Desenvolvimento de Sistemas (ADS) e Mecatrônica. Nosso objetivo central é o desenvolvimento do inovador sistema "Anti Cochilo", que visa prevenir a sonolência do condutor durante a condução. Aqui, você encontrará todos os recursos, códigos, documentações e informações essenciais para a implementação, testes e aprimoramento contínuo deste sistema. Seja bem-vindo ao nosso espaço de colaboração e inovação tecnológica!
# Funcionalidades:

Detecção de Sonolência:

Nosso sistema é habilidoso em reconhecer indicadores de sonolência do condutor ao empregar tecnologias avançadas, tais como a detecção dos padrões de movimento nos eixos X e Y.

Alertas Personalizados:

Com base nos sinais de sonolência identificados, o projeto oferece alertas personalizados para manter o motorista alerta, vibrações suaves na cabeça do motorista e mensagens visuais.

Intervenção Preventiva:

Para além dos alertas, nosso sistema pode acionar medidas preventivas, como estabelecer comunicação com a central a fim de contatar o motorista diretamente.

Análise de Dados:

O sistema registra e analisa os padrões de comportamento do motorista ao longo do tempo, oferecendo insights acerca dos momentos em que a sonolência é mais pronunciada.
# Índice

- [Instalação](#instalação)
- [Como usar](#como-usar)


# Instalação do React Native

Este guia fornece instruções básicas para instalar o ambiente de desenvolvimento do React Native no seu sistema.

## Pré-requisitos

Certifique-se de ter os seguintes softwares instalados no seu sistema:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/get-npm) ou [Yarn](https://classic.yarnpkg.com/en/docs/install/)
- [JDK (Java Development Kit)](https://www.oracle.com/java/technologies/javase-jdk8-downloads.html)
- [Android Studio](https://developer.android.com/studio)
  - Durante a instalação, selecione "Android SDK" e "Android Virtual Device".

## Instalação do React Native CLI

Execute o seguinte comando no terminal para instalar o React Native CLI globalmente:

```bash
npm install -g react-native-cli
# ou usando Yarn
# yarn global add react-native-cli
```

Criando um novo projeto React Native
Para criar um novo projeto React Native, execute os seguintes comandos no terminal:

```bash
react-native init MeuAppReactNative

cd MeuAppReactNative
```

Executando o projeto

Android

Para executar o projeto no emulador Android, utilize:

```bash
react-native run-android
```

IOS

Para executar o projeto no simulador iOS, utilize:
```bash
react-native run-ios
```
## Como usar
utilize este comando para clonar o repositório
```git
git clone https://github.com/ThiagoTav/ADS_API_IoT.git

```
antes, utilize este comando para executar o servidor de desenvolvimento
```
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Abra http://localhost:3000 com o seu browser para ver o resultado.

Após iniciar o servidor local e acessar o localhost, você será direcionado para a interface do projeto. Nessa interface, estarão disponíveis os dados gerados pelo sistema "Anti Cochilo". Esses dados fornecem alertas relacionados ao estado de sono do motorista, oferecendo informações detalhadas, como datas específicas e os ângulos registrados nos eixos X e Y. Esses alertas são representativos dos momentos em que o sistema identifica sinais de sonolência com base nos padrões de movimento detectados durante a condução. Ao explorar a interface, será possível visualizar esses alertas e compreender os momentos em que a sonolência foi detectada, contribuindo assim para a prevenção de situações de risco durante a condução.


![nome user](https://github.com/ThiagoTav/ADS_API_IoT/assets/123522796/8be2d1c9-8e9b-4904-b8a6-50d3ef62387e)

Este espaço apresenta o perfil do motorista que está no controle do veículo no momento, assim como a cidade onde desempenha suas funções profissionais. O perfil é altamente customizável e conta com persistência de dados, embora ainda não esteja integrado ao banco de dados

![eixos x e y](https://github.com/ThiagoTav/ADS_API_IoT/assets/123522796/9f4b8cc5-c070-4357-9190-69cb2fa52f4d)

Este componente desempenha a análise minuciosa dos eixos cartesianos x e y, os quais representam a posição da cabeça do motorista. Caso a posição da cabeça esteja abaixo de um limiar específico em um desses eixos, o sistema é acionado, emitindo tanto um alerta sonoro quanto uma vibração, visando alertar o motorista sobre essa situação.

![WhatsApp Image 2023-12-13 at 16 09 43](https://github.com/ThiagoTav/ADS_API_IoT/assets/123522796/737d2874-b8ac-4884-9dab-5526450f9e77)

Os gráficos exibirão as variações nos eixos x e y, mostrando as diferentes mudanças entre eles e destacando os picos de alteração.



