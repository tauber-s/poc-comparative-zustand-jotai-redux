
# Exemplos de Extensões do Jotai

O Jotai possui várias extensões que facilitam a integração com outros sistemas de gerenciamento de estado, persistência e dados assíncronos.

---

## 💾 `atomWithStorage`

Cria um atom que sincroniza com `localStorage` ou `sessionStorage`. Útil para manter o estado mesmo após recarregar ou fechar a aba.

```js
import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const darkModeAtom = atomWithStorage('darkMode', false);

const Page = () => {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);

  return (
    <>
      <h1>Welcome to {darkMode ? 'dark' : 'light'} mode!</h1>
      <button onClick={() => setDarkMode(!darkMode)}>toggle theme</button>
    </>
  );
};
```

---

## 🔍 `selectAtom`

Cria um atom derivado, que observa parte de outro atom. Ajuda na otimização de renderizações.

```js
import { selectAtom } from 'jotai/utils';
const nameAtom = atom((get) => get(userAtom).name);
```

---

## ✂️ `splitAtom`

Divide um array de atoms em vários atoms individuais. Útil para listas editáveis como apps de tarefas.

```js
import { splitAtom } from 'jotai/utils';

const initialState = [
  { task: 'help the town', done: false },
  { task: 'feed the dragon', done: false },
];

const todosAtom = atom(initialState);
const todoAtomsAtom = splitAtom(todosAtom);
```

---

## 🔗 Integrações com outras bibliotecas

### 🧼 `jotai-valtio`

Permite usar um proxy state do Valtio com um atom.

```js
import { atomWithProxy } from 'jotai-valtio';
import { proxy } from 'valtio/vanilla';

const proxyState = proxy({ count: 0 });
const stateAtom = atomWithProxy(proxyState);
```

### 🧃 `jotai-zustand`

Permite usar uma store do Zustand com um atom.

```js
import { atomWithStore } from 'jotai-zustand';
import create from 'zustand/vanilla';

const store = create(() => ({ count: 0 }));
const stateAtom = atomWithStore(store);
```

### 🧱 `jotai-redux`

Permite usar uma store do Redux com um atom.

```js
import { atomWithStore } from 'jotai-redux';
import { createStore } from 'redux';

const initialState = { count: 0 };
const reducer = (state = initialState, action: { type: 'INC' }) => {
  if (action.type === 'INC') {
    return { ...state, count: state.count + 1 };
  }
  return state;
};
const store = createStore(reducer);
const storeAtom = atomWithStore(store);
```

---

## 🔄 `atomWithQuery` (React Query)

Integração com o React Query para gerenciamento de dados assíncronos. Facilita o uso de caching, carregamento e estados de erro.

```js
import { atomWithQuery } from 'jotai-tanstack-query';

const idAtom = atom(1);
const userAtom = atomWithQuery((get) => ({
  queryKey: ['users', get(idAtom)],
  queryFn: async ({ queryKey: [, id] }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return res.json();
  },
}));
```

---
> This markdown has been improved with the help of AI.