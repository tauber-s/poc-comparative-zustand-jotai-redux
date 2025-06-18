// jotai/utils

// atomWithStorage
// Cria um atom que sincroniza com localStorage ou sessionStorage
// faz sentido quando precisa manter o state mesmo quando o usuario fechar a aba
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

// selectAtom
// cria um atom devivado, que observa parte de outro atom
// faz sentido pra otimização de render
import { selectAtom } from 'jotai/utils';
const nameAtom = atom((get) => get(userAtom).name);

// splitAtom
// divide um array de atom em varios atom individuais
// faz sentido pra listas editaveis, tipo em um todo app
import { splitAtom } from 'jotai/utils';

const initialState = [
  {
    task: 'help the town',
    done: false,
  },
  {
    task: 'feed the dragon',
    done: false,
  },
];

const todosAtom = atom(initialState);
const todoAtomsAtom = splitAtom(todosAtom);

// jotai/valtio
// jotai/zustand
// jotai/redux
// são integrações com outras bibliotecas de state pra interoperabilidade
// faz sentido quando precisa usar uma parte de outra biblioteca, mas sem abrir mão de usar o jotai
// - valtio
//  fornece uma interface proxy que pode ser usada com o atom
import { atomWithProxy } from 'jotai-valtio';
import { proxy } from 'valtio/vanilla';

const proxyState = proxy({ count: 0 });
const stateAtom = atomWithProxy(proxyState);

// - zustand
//  fornece uma interface store que pode ser usada com o atom
import { atomWithStore } from 'jotai-zustand';
import create from 'zustand/vanilla';

const store = create(() => ({ count: 0 }));
const stateAtom = atomWithStore(store);

// - redux
// também fornece uma interface store que pode ser usada com o atom
import { atomWithStore } from 'jotai-redux';
import { createStore } from 'redux';

const initialState = { count: 0 };
const reducer = (state = initialState, action: { type: 'INC' }) => {
  if (action.type === 'INC') {
    return { ...state, count: state.count + 1 };
  };
  return state;
};
const store = createStore(reducer);
const storeAtom = atomWithStore(store);

// jotai/query
// integração com o React Query pra gerenciamento de dados assincronos
// faz sentido pra caching, fetching, loading/error states
import { atomWithQuery } from 'jotai-tanstack-query';

const idAtom = atom(1);
const userAtom = atomWithQuery((get) => ({
  queryKey: ['users', get(idAtom)],
  queryFn: async ({ queryKey: [, id] }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return res.json();
  },
}));

