
# 🧙‍♂️ RPG Core API

A **RPG Core API** é uma API modular, extensível e personalizável criada para facilitar o desenvolvimento de jogos de RPG. Seu objetivo é fornecer um backend robusto com funcionalidades essenciais como personagens, raças, classes, inventário e habilidades, permitindo que estúdios/dev indies foquem na experiência de jogo sem se preocupar com a infraestrutura básica.

Esta API será oferecida como produto B2B para desenvolvedores de jogos, integrando diretamente com sistemas externos sem acoplamento a regras ou ambientações específicas, tudo por uma única URL.

---

## 🎯 Objetivo

Fornecer uma API genérica, poderosa e 100% personalizável que abstrai as principais funcionalidades de sistemas de RPG:

- Criação e evolução de personagens
- Gerenciamento de itens e inventário
- Sistema de raças e classes dinâmicas
- Sessões de jogo e controle de campanhas
- Armazenamento de logs e auditorias
- Total liberdade de modelagem para o desenvolvedor

---

## 🔧 Estrutura de Módulos

### 🔹 Personagens
- Cadastro e gerenciamento
- Atributos (STR, DEX, MND, END, LCK)
- Sistema de níveis e experiência (XP)
- Vida ( Health ) e Vigor ( Stamina )
- Associação com inventário, raça e classe

### 🔹 Atributos Padrões
- **STR (Strength)** – Força física
- **DEX (Dexterity)** – Destreza e agilidade
- **MND (Mind)** – Inteligência / mentalidade
- **END (Endurance)** – Constituição / resistência física
- **STL (Stealth)** -- Se esconder, andar em silêncio, atacar de surpresa
- **LCK (Luck)** – Sorte

### 🔹 Itens
- Nome, tipo, raridade e efeitos
- Slots de equipamento e categorização
- Regras de peso, empilhamento e buffs mágicos
- Exemplo:
```json
{
  "name": "Iron Sword",
  "type": "Weapon",
  "rarity": "Common",
  "effects": { "STR": +5 },
}
```

### 🔹 Raças (totalmente customizáveis)
- Nome, descrição, atributos base
- Bônus condicionais com base na classe
- Exemplo:
```json
{
  "name": "Forest Elf",
  "description": "Exemple of a background story for this race",
  "baseAttributes": { "DEX": +3, "STR": -1 },
  "bonuses": [
    {
      "condition": { "class": "Archer" },
      "effects": [
        { "DEX": +1 },
        { "LCK": +1 },
        { "STL": +2 }
      ]
    }
  ]
}
```

### 🔹 Classes (100% definidas pelo cliente)
- Nome, atributos iniciais e habilidades únicas
- Permite qualquer combinação com raças
- Exemplo:
```json
{
  "name": "Archer",
  "baseAttributes": { "DEX": +4, "STR": +1 },
  "abilities": [
    {
      "name": "Piercing Shot",
      "description": "Deals extra damage that ignores armor.",
      "cooldown": 2, // Segundos
      "cost": { "Stamina": 2 }
    }
  ]
}
```

### 🔹 Inventário
- Gerenciamento de itens por personagem
- Equipar, desequipar e usar
- Restrições de peso ou slots

### 🔹 Habilidades
- Cadastro de habilidades ativas/passivas
- Cooldown, custo, descrição de efeito
- Associação com classe ou personagem

### 🔹 Logs
- Todas as ações relevantes são salvas no MongoDB
- Útil para debug, auditoria e controle de mestres

---

## ⚙️ Tecnologias Utilizadas

- **NestJS** como framework principal
- **PostgreSQL** para dados estruturados
- **MongoDB** para logs e histórico
- **Docker** para ambiente padronizado
- **JWT** para autenticação
- **Swagger** para documentação interativa

---

## 🔐 Foco Comercial (B2B)

A API será vendida para empresas como uma solução de backend pronta para jogos. Benefícios:

- Redução de custo e tempo de desenvolvimento
- Flexível e totalmente personalizável
- Painel de controle futuro (visualizador de personagens, itens, sessões)
- Licenciamento comercial sob demanda

---

## 📌 Futuras Funcionalidades

- Módulo de missões
- Painel para desenvolvedores

---

## 📄 Licença

Licença comercial fechada. Disponível para empresas mediante contrato.
