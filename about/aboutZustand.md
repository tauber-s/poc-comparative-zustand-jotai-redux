
# Exemplos de Middlewares do Zustand

O Zustand possui diversos middlewares que ampliam suas funcionalidades. Abaixo estão exemplos práticos de cada um.

---

## 📦 `persist`

Salva o estado no `localStorage` ou `sessionStorage`, permitindo persistência entre sessões.

```js
import { persist } from 'zustand/middleware';

const positionStore = createStore()(
  persist(
    (set) => ({
      position: { x: 0, y: 0 },
      setPosition: (position) => set({ position }),
    }),
    { name: 'position-storage' },
  ),
);
```

---

## 🔁 `immer`

Permite fazer mutações imutáveis de forma mais simples.

```js
import { immer } from 'zustand/middleware/immer';

const personStore = createStore()(
  immer((set) => ({
    person: {
      firstName: 'Barbara',
      lastName: 'Hepworth',
      email: 'bhepworth@sculpture.com',
    },
    setPerson: (nextPerson) =>
      set((state) => {
        state.person =
          typeof nextPerson === 'function'
            ? nextPerson(state.person)
            : nextPerson;
      }),
  })),
);
```

---

## 🛠️ `devtools`

Integra a store ao Redux DevTools sem depender do Redux.

```js
import { devtools } from 'zustand/middleware';

const useJungleStore = create()(
  devtools((set) => ({
    bears: 0,
    addBear: () =>
      set((state) => ({ bears: state.bears + 1 }), undefined, 'jungle/addBear'),
    fishes: 0,
    addFish: () =>
      set(
        (state) => ({ fishes: state.fishes + 1 }),
        undefined,
        'jungle/addFish',
      ),
  })),
);
```

---

## 🔍 `subscribeWithSelector`

Permite subscrever a mudanças específicas com base no estado atual.

```js
import { subscribeWithSelector } from 'zustand/middleware';

const positionStore = createStore()(
  subscribeWithSelector((set) => ({
    position: { x: 0, y: 0 },
    setPosition: (position) => set({ position }),
  })),
);
```

---

## 🧱 `redux`

Permite atualizar a store com actions e reducers, seguindo o padrão do Redux.

```js
import { redux } from 'zustand/middleware';

const personStoreReducer = (state, action) => {
  switch (action.type) {
    case 'person/setFirstName':
      return { ...state, firstName: action.firstName };
    case 'person/setLastName':
      return { ...state, lastName: action.lastName };
    case 'person/setEmail':
      return { ...state, email: action.email };
    default:
      return state;
  }
};

const personStoreInitialState = {
  firstName: '',
  lastName: '',
  email: '',
};

const personStore = createStore()(
  redux(personStoreReducer, personStoreInitialState),
);
```

---
> This markdown has been improved with the help of AI.