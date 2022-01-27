import { Listbox, Transition } from "@headlessui/react";
import {
  CogIcon,
  DocumentTextIcon,
  SelectorIcon,
  SparklesIcon,
} from "@heroicons/react/outline";
import { Fragment, useState } from "react";
import Button from "../components/Button";
import HeaderButtons from "../components/Header";
import { useHistory } from "react-router-dom";

export default function Raffles() {
  const { push } = useHistory();
  const [select, setSelect] = useState("");
  const [search, setSearch] = useState("");
  const handleSelect = () => {
    if (select === "cpf") {
      return "Buscar por CPF";
    }
    if (select === "number") {
      return "Buscar por Número";
    }
    if (select === "all") {
      return "Buscar Todos";
    }
    if (select === "") {
      return "Selecione uma Opção";
    }
  };

  return (
    <Fragment>
      <HeaderButtons title={"RIFAS"} icon={<DocumentTextIcon />} />

      <div className="pt-20 px-3 pb-3 overflow-auto max-h-full">
        <div className="flex mb-5 flex-col p-3 bg-white rounded-md shadow-md">
          <label className="text-sm text-gray-700 mb-2 block">
            Busca Avançada
          </label>
          <div className="grid grid-cols-5 gap-5">
            <div className="col-span-1">
              <Listbox
                value={select}
                onChange={(e) => {
                  setSelect(e);
                }}
              >
                <div className="relative">
                  <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-1 pr-10 py-2 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm">
                    <span className="ml-3 block truncate text-gray-700">
                      {handleSelect()}
                    </span>
                    <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <SelectorIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                      <Listbox.Option
                        value="number"
                        className="cursor-pointer select-none relative py-1 pl-3 pr-9 text-gray-700 hover:bg-gray-200"
                      >
                        Buscar por Número
                      </Listbox.Option>
                      <Listbox.Option
                        value="all"
                        className="cursor-pointer select-none relative py-1 pl-3 pr-9 text-gray-700 hover:bg-gray-200"
                      >
                        Buscar Todos
                      </Listbox.Option>
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
            <div className="col-span-4">
              <input
                className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2 text-left cursor-text focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Digite o número para buscar"
                disabled={select === "all" && true}
                value={search}
                type={"number"}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="shadow-md overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white p-3">
          <div className="grid grid-cols-5 gap-5">
            <div className="rounded-md border overflow-hidden relative h-fit">
              <div className="absolute bg-green-500 rounded-md text-xs px-2 py-1 text-white font-semibold right-3 top-3">
                Nº 1
              </div>
              <img
                src="https://image.freepik.com/vetores-gratis/fundo-de-bingo-com-estrelas_23-2147634445.jpg"
                alt="PA Rifas"
                className="w-full object-cover"
              />
              <div className="p-2 flex justify-between items-center">
                <span className="text-sm font-semibold text-green-500 truncate">
                  TÍTULO DA RIFA
                </span>
                <div className="bg-orange-500 rounded-md text-center px-2 py-1 text-xs font-semibold text-white">
                  R$ 2,10
                </div>
              </div>
              <p className="text-gray-700 text-xs px-2">
                A expressão Lorem ipsum em design gráfico e editoração é um
                texto padrão em latim utilizado na produção gráfica para
                preencher os espaços de texto em publicações para testar e
                ajustar aspectos visuais antes de utilizar conteúdo real
              </p>
              <div className="flex justify-between items-center px-2">
                <span className="text-xs py-2 text-gray-700">
                  Sorteio: <strong>23/02/2022 às 21:00h</strong>
                </span>
                <div className="flex items-center">
                  <SparklesIcon className="w-3 h-3" />
                  <span className="text-xs">100%</span>
                </div>
              </div>

              <div className="px-2 mb-2">
                <Button
                  size="sm"
                  full={true}
                  icon={<CogIcon />}
                  onClick={() => push("/raffle")}
                >
                  GERENCIAR
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
