import Header from "../components/Header";
import {
  PhotographIcon,
  PlusIcon,
  SaveIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import InputMask from "react-input-mask";
import Button from "../components/Button";

export default function NovaRifaNoParams() {
  return (
    <>
      <Header icon={<SaveIcon />} title={"CRIAR RIFA"} />

      <div className="pt-20 px-3 pb-3 overflow-auto max-h-full">
        <div className="grid grid-cols-5 gap-5">
          <div className="bg-white rounded-md shadow-md p-2 h-fit">
            <span className="text-sm text-gray-700 mb-2 block">
              Image da Rifa
            </span>
            <label
              className="h-40 flex justify-center items-center flex-col border border-green-500 rounded-md border-dashed cursor-pointer hover:border-2"
              htmlFor="thumbnail"
            >
              <input className="sr-only" id="thumbnail" type={"file"} />
              <PhotographIcon className="w-10 h-10" />
              <span className="text-gray-700 text-sm">
                Insira uma imagem para a rifa
              </span>
            </label>
          </div>
          <div className="col-span-4 bg-white rounded-md shadow-md h-fit p-3">
            <div className="grid grid-cols-4 gap-5">
              <div className="w-full col-span-3">
                <label className="text-sm text-gray-700 mb-2 block">
                  Título da Rifa
                </label>
                <input
                  className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2 text-left cursor-text focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="Título da Rifa"
                />
              </div>
              <div className="w-full">
                <label className="text-sm text-gray-700 mb-2 block">
                  Qtd. Números
                </label>
                <input
                  className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2 text-left cursor-text focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="Quantidade de Números"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-3">
              <div className="w-full">
                <label className="text-sm text-gray-700 mb-2 block">
                  Valor da Cota
                </label>
                <input
                  className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2 text-left cursor-text focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="Valor da Cota"
                />
              </div>
              <div className="w-full">
                <label className="text-sm text-gray-700 mb-2 block">
                  Data do Sorteio
                </label>
                <InputMask
                  mask={"99/99/9999"}
                  className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2 text-left cursor-text focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="Data do Sorteio"
                />
              </div>
              <div className="w-full">
                <label className="text-sm text-gray-700 mb-2 block">
                  Hora do Sorteio
                </label>
                <InputMask
                  className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2 text-left cursor-text focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="Hora do Sorteio"
                  mask={"99:99"}
                />
              </div>
            </div>
            <div className="w-full mt-3">
              <label className="text-sm text-gray-700 mb-2 block">
                Nome do Cliente
              </label>
              <input
                className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2 text-left cursor-text focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Nome do Cliente"
              />
            </div>
            <div className="grid grid-cols-3 gap-5 mt-3">
              <div className="w-full">
                <label className="text-sm text-gray-700 mb-2 block">CPF</label>
                <InputMask
                  mask={"999.999.999-99"}
                  className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2 text-left cursor-text focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="CPF"
                />
              </div>
              <div className="w-full">
                <label className="text-sm text-gray-700 mb-2 block">
                  Telefone
                </label>
                <InputMask
                  mask={"(99) 99999-9999"}
                  className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2 text-left cursor-text focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="Telefone"
                />
              </div>
              <div className="w-full">
                <label className="text-sm text-gray-700 mb-2 block">
                  Email (Opcional)
                </label>
                <input
                  className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2 text-left cursor-text focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="Email (Opcional)"
                />
              </div>
            </div>

            <div className="w-full mt-3">
              <label className="text-sm text-gray-700 mb-2 block">
                Descrição da Rifa
              </label>
              <textarea
                className="relative resize-none w-full bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2 text-left cursor-text focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Descrição da Rifa"
                rows={4}
              />
            </div>

            <div className="w-full mt-1 grid grid-cols-4 gap-5">
              <div className="w-full">
                <label className="text-sm text-gray-700 mb-2 block">
                  Prêmios
                </label>
                <input
                  className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2 text-left cursor-text focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm mb-2"
                  placeholder="Email (Opcional)"
                />
                <Button
                  size="sm"
                  full={true}
                  icon={<PlusIcon />}
                  scheme="orange"
                >
                  Adicionar
                </Button>
              </div>
              <div className="grid col-span-3 grid-cols-3 gap-5">
                <div className="bg-gray-200 rounded-md p-2 flex justify-between items-center h-fit text-sm">
                  <div className="w-full">
                    <span className="block font-semibold">1º Prêmio</span>
                    <span className="block">PIX DE 3000 MIL</span>
                  </div>
                  <button className="btn bg-red-500 rounded-full p-2 cursor-pointer ml-2 hover:bg-red-600 active:bg-red-500 shadow-sm">
                    <TrashIcon className="w-4 h-4 text-gray-100" />
                  </button>
                </div>
                <div className="bg-gray-200 rounded-md p-2 flex justify-between items-center h-fit text-sm">
                  <div className="w-full">
                    <span className="block font-semibold">1º Prêmio</span>
                    <span className="block">PIX DE 3000 MIL</span>
                  </div>
                  <button className="btn bg-red-500 rounded-full p-2 cursor-pointer ml-2 hover:bg-red-600 active:bg-red-500 shadow-sm">
                    <TrashIcon className="w-4 h-4 text-gray-100" />
                  </button>
                </div>
                <div className="bg-gray-200 rounded-md p-2 flex justify-between items-center h-fit text-sm">
                  <div className="w-full">
                    <span className="block font-semibold">1º Prêmio</span>
                    <span className="block">PIX DE 3000 MIL</span>
                  </div>
                  <button className="btn bg-red-500 rounded-full p-2 cursor-pointer ml-2 hover:bg-red-600 active:bg-red-500 shadow-sm">
                    <TrashIcon className="w-4 h-4 text-gray-100" />
                  </button>
                </div>
                <div className="bg-gray-200 rounded-md p-2 flex justify-between items-center h-fit text-sm">
                  <div className="w-full">
                    <span className="block font-semibold">1º Prêmio</span>
                    <span className="block">PIX DE 3000 MIL</span>
                  </div>
                  <button className="btn bg-red-500 rounded-full p-2 cursor-pointer ml-2 hover:bg-red-600 active:bg-red-500 shadow-sm">
                    <TrashIcon className="w-4 h-4 text-gray-100" />
                  </button>
                </div>
                <div className="bg-gray-200 rounded-md p-2 flex justify-between items-center h-fit text-sm">
                  <div className="w-full">
                    <span className="block font-semibold">1º Prêmio</span>
                    <span className="block">PIX DE 3000 MIL</span>
                  </div>
                  <button className="btn bg-red-500 rounded-full p-2 cursor-pointer ml-2 hover:bg-red-600 active:bg-red-500 shadow-sm">
                    <TrashIcon className="w-4 h-4 text-gray-100" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-end border-t mt-5 pt-5">
              <Button size="lg" icon={<SaveIcon />}>
                CRIAR RIFA
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
