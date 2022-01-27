import { Dialog, Transition } from "@headlessui/react";
import {
  DocumentTextIcon,
  GiftIcon,
  PencilIcon,
  PhotographIcon,
  SaveIcon,
} from "@heroicons/react/outline";
import { Fragment, useState } from "react";
import Button from "../components/Button";
import HeaderButtons from "../components/Header";
import DatePicker, { registerLocale } from "react-datepicker";
import pt_br from "date-fns/locale/pt-BR";
import InputMask from "react-input-mask";

registerLocale("pt_br", pt_br);

export default function Raffle() {
  const [modalImage, setModalImage] = useState(false);
  const [modalTitle, setModalTitle] = useState(false);
  const [modalDesc, setModalDesc] = useState(false);
  const [modalEditTrophy, setModalEditTrophy] = useState(false);
  const [modalDrawn, setModalDrawn] = useState(false);
  const [modalDate, setModalDate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Fragment>
      <HeaderButtons title={"TÍTULO DA RIFA"} icon={<DocumentTextIcon />} />
      <div className="overflow-auto max-h-full pb-5">
        <div
          className="h-56"
          style={{
            backgroundImage:
              "url(https://image.freepik.com/vetores-gratis/fundo-de-bingo-com-estrelas_23-2147634445.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="h-full bg-black bg-opacity-40 backdrop-blur-sm" />
        </div>
        <div className="grid grid-cols-3 gap-10 px-10 -mt-28">
          <div className="w-full z-30">
            <img
              src="https://image.freepik.com/vetores-gratis/fundo-de-bingo-com-estrelas_23-2147634445.jpg"
              alt="PA Rifas"
              className="w-full object-cover rounded-md mb-3 shadow-md"
            />
            <Button
              full={true}
              scheme="blue"
              size="sm"
              icon={<PencilIcon />}
              onClick={() => setModalImage(true)}
            >
              ALTERAR IMAGEM
            </Button>
          </div>
          <div className="col-span-2 flex flex-col">
            <div className="w-full z-10 h-28 text-3xl flex items-center font-serif text-orange-500 font-bold">
              TÍTULO DA RIFA{" "}
              <button
                className="ml-2 btn rounded-full bg-blue-600 p-2 text-white hover:bg-blue-700 active:bg-blue-600"
                onClick={() => setModalTitle(true)}
              >
                <PencilIcon className="w-4 h-4" />
              </button>
            </div>
            <p className="text-gray-700 text-lg mt-2">
              A expressão Lorem ipsum em design gráfico e editoração é um texto
              padrão em latim utilizado na produção gráfica para preencher os
              espaços de texto em publicações para testar e ajustar aspectos
              visuais antes de utilizar conteúdo real{" "}
              <button
                className="ml-2 btn rounded-full bg-blue-600 p-2 text-white hover:bg-blue-700 active:bg-blue-600"
                onClick={() => setModalDesc(true)}
              >
                <PencilIcon className="w-4 h-4" />
              </button>
            </p>

            <div className="shadow-md overflow-hidden border-b border-gray-200 sm:rounded-lg mt-3">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-white">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2"
                    ></th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-80"
                    >
                      PRÊMIO
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      STATUS
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-36"
                    >
                      OPÇÕES
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-2 whitespace-nowrap w-2 text-sm text-gray-700">
                      <GiftIcon className="w-4 h-4" />
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap w-80 text-sm text-gray-700">
                      PIX DE 3000 MIL REAIS
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-100 bg-yellow-500 font-semibold">
                      SORTEADO
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap w-36 text-sm text-gray-700">
                      <div className="flex justify-between gap-2">
                        <Button
                          size="xs"
                          scheme="blue"
                          onClick={() => setModalEditTrophy(true)}
                        >
                          EDITAR
                        </Button>
                        <Button size="xs" onClick={() => setModalDrawn(true)}>
                          SORTEAR
                        </Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="px-10 mt-5">
          <div className="grid grid-cols-3 gap-5">
            <div className="rounded-md border bg-white shadow-md px-4 py-3 flex flex-col">
              <span className="text-gray-700 text-sm mb-2">
                DATA DO SORTEIO
              </span>
              <div className="flex gap-5 items-center">
                <span className="text-green-500 text-2xl font-semibold">
                  23/02/2022 às 21:00h
                </span>
                <button
                  className="btn rounded-full bg-blue-600 p-2 text-white hover:bg-blue-700 active:bg-blue-600"
                  onClick={() => setModalDate(true)}
                >
                  <PencilIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="rounded-md border bg-white shadow-md px-4 py-3 flex flex-col">
              <span className="text-gray-700 text-sm mb-2">
                VALOR DO SORTEIO
              </span>
              <div className="flex gap-5 items-center">
                <span className="text-green-500 text-2xl font-semibold">
                  R$ 2,10
                </span>
              </div>
            </div>
            <div className="rounded-md border bg-white shadow-md px-4 py-3 flex flex-col">
              <span className="text-gray-700 text-sm mb-1">ORGANIZAÇÃO</span>

              <span className="text-green-500 font-semibold text-sm">
                NATANAEL DOS SANTOS BEZERRA
              </span>
              <span className="text-green-500 font-semibold text-sm">
                (63) 99971-1716
              </span>
            </div>
          </div>
        </div>

        <div className="px-10 mt-5">
          <div className="grid grid-cols-4 gap-5">
            <div className="rounded-md border bg-white shadow-md px-4 py-3 flex flex-col">
              <span className="text-gray-700 text-sm mb-2">
                TOTAL DE NÚMEROS
              </span>
              <div className="flex gap-5 items-center">
                <span className="text-green-500 text-2xl font-semibold">
                  10000
                </span>
              </div>
            </div>
            <div className="rounded-md border bg-white shadow-md px-4 py-3 flex flex-col">
              <span className="text-gray-700 text-sm mb-2">
                TOTAL DE NÚMEROS LIVRES
              </span>
              <div className="flex gap-5 items-center">
                <span className="text-green-500 text-2xl font-semibold">
                  10000
                </span>
              </div>
            </div>
            <div className="rounded-md border bg-white shadow-md px-4 py-3 flex flex-col">
              <span className="text-gray-700 text-sm mb-2">
                TOTAL DE NÚMEROS RESERVADOS
              </span>
              <div className="flex gap-5 items-center">
                <span className="text-green-500 text-2xl font-semibold">
                  10000
                </span>
              </div>
            </div>
            <div className="rounded-md border bg-white shadow-md px-4 py-3 flex flex-col">
              <span className="text-gray-700 text-sm mb-2">
                TOTAL DE NÚMEROS PAGOS
              </span>
              <div className="flex gap-5 items-center">
                <span className="text-green-500 text-2xl font-semibold">
                  10000
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-10 mt-5">
          <div className="grid grid-cols-4 gap-5">
            <div className="rounded-md border bg-orange-600 shadow-md px-4 py-3 flex flex-col">
              <span className="text-gray-100 text-sm mb-2">
                TAXA DE PAGAMENTOS
              </span>
              <div className="flex gap-5 items-center">
                <span className="text-gray-200 text-2xl font-semibold">
                  R$ 35,00
                </span>
              </div>
            </div>
            <div className="rounded-md border bg-blue-600 shadow-md px-4 py-3 flex flex-col">
              <span className="text-gray-100 text-sm mb-2">
                VALOR ARRECADADO
              </span>
              <div className="flex gap-5 items-center">
                <span className="text-gray-200 text-2xl font-semibold">
                  R$ 35,00
                </span>
              </div>
            </div>
            <div className="rounded-md border bg-green-500 shadow-md px-4 py-3 flex flex-col">
              <span className="text-gray-100 text-sm mb-2">VALOR LIBERADO</span>
              <div className="flex gap-5 items-center">
                <span className="text-gray-200 text-2xl font-semibold">
                  R$ 35,00
                </span>
              </div>
            </div>
            <div className="rounded-md border bg-red-600 shadow-md px-4 py-3 flex flex-col">
              <span className="text-gray-100 text-sm mb-2">
                VALOR BLOQUEADO
              </span>
              <div className="flex gap-5 items-center">
                <span className="text-gray-200 text-2xl font-semibold">
                  R$ 35,00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Transition appear show={modalImage} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={() => setModalImage(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-sm my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
                <Dialog.Title
                  as="h3"
                  className="text-lg leading-6 font-medium text-gray-800 px-5 pt-5"
                >
                  Alterar Imagem
                </Dialog.Title>
                <div className="w-full">
                  <div className="w-full p-5 flex justify-center">
                    <label
                      className="w-80 h-80 flex justify-center items-center flex-col border border-green-500 rounded-md border-dashed cursor-pointer hover:border-2"
                      htmlFor="thumbnail"
                    >
                      <input className="sr-only" id="thumbnail" type={"file"} />
                      <PhotographIcon className="w-10 h-10" />
                      <span className="text-gray-700 text-sm">
                        Insira uma imagem para a rifa
                      </span>
                    </label>
                  </div>

                  <div className="flex bg-gray-50 px-5 py-3 justify-end">
                    <Button
                      icon={<SaveIcon />}
                      loading={loading}
                      onClick={() => {}}
                    >
                      SALVAR
                    </Button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      <Transition appear show={modalTitle} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={() => setModalTitle(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
                <Dialog.Title
                  as="h3"
                  className="text-lg leading-6 font-medium text-gray-800 px-5 pt-5"
                >
                  Alterar Título
                </Dialog.Title>
                <div className="w-full">
                  <div className="w-full p-5">
                    <label className="text-sm text-gray-700 mb-2 block">
                      Título da Rifa
                    </label>
                    <input
                      className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2 text-left cursor-text focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                      placeholder="Título da Rifa"
                    />
                  </div>

                  <div className="flex bg-gray-50 px-5 py-3 justify-end">
                    <Button
                      icon={<SaveIcon />}
                      loading={loading}
                      onClick={() => {}}
                    >
                      SALVAR
                    </Button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      <Transition appear show={modalDesc} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={() => setModalDesc(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
                <Dialog.Title
                  as="h3"
                  className="text-lg leading-6 font-medium text-gray-800 px-5 pt-5"
                >
                  Alterar Descrição
                </Dialog.Title>
                <div className="w-full">
                  <div className="w-full p-5">
                    <label className="text-sm text-gray-700 mb-2 block">
                      Descrição
                    </label>
                    <textarea
                      className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2 text-left cursor-text focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm resize-none"
                      placeholder="Descrição da Rifa"
                      rows={5}
                    />
                  </div>

                  <div className="flex bg-gray-50 px-5 py-3 justify-end">
                    <Button
                      icon={<SaveIcon />}
                      loading={loading}
                      onClick={() => {}}
                    >
                      SALVAR
                    </Button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      <Transition appear show={modalDate} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={() => setModalDate(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-sm my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
                <Dialog.Title
                  as="h3"
                  className="text-lg leading-6 font-medium text-gray-800 px-5 pt-5"
                >
                  Alterar Data do Sorteio
                </Dialog.Title>
                <div className="w-full">
                  <div className="w-full p-5">
                    <label className="text-sm text-gray-700 mb-2 block">
                      Data do Sorteio
                    </label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2 text-left cursor-text focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                      locale="pt_br"
                      dateFormat="dd/MM/yyyy 'às' hh:mm aa"
                      showTimeSelect
                      timeFormat="p"
                    />
                  </div>

                  <div className="flex bg-gray-50 px-5 py-3 justify-end rounded-b-md">
                    <Button
                      icon={<SaveIcon />}
                      loading={loading}
                      onClick={() => {}}
                    >
                      SALVAR
                    </Button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      <Transition appear show={modalEditTrophy} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={() => setModalEditTrophy(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
                <Dialog.Title
                  as="h3"
                  className="text-lg leading-6 font-medium text-gray-800 px-5 pt-5"
                >
                  Alterar Prêmio
                </Dialog.Title>
                <div className="w-full">
                  <div className="w-full p-5">
                    <label className="text-sm text-gray-700 mb-2 block">
                      Prêmio
                    </label>
                    <input
                      className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2 text-left cursor-text focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                      placeholder="Prêmio"
                    />
                  </div>

                  <div className="flex bg-gray-50 px-5 py-3 justify-end">
                    <Button
                      icon={<SaveIcon />}
                      loading={loading}
                      onClick={() => {}}
                    >
                      SALVAR
                    </Button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      <Transition appear show={modalDrawn} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={() => setModalDrawn(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-sm my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
                <Dialog.Title
                  as="h3"
                  className="text-lg leading-6 font-medium text-gray-800 px-5 pt-5"
                >
                  Sortear
                </Dialog.Title>
                <div className="w-full">
                  <div className="w-full p-5">
                    <label className="text-sm text-gray-700 mb-1 block">
                      Número Sorteado
                    </label>
                    <input
                      className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2 text-left cursor-text focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                      placeholder="Número Sorteado"
                    />

                    <label className="text-sm text-gray-700 mb-1 mt-2 block">
                      Data do Sorteio
                    </label>
                    <InputMask
                      mask={"99/99/9999"}
                      className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2 text-left cursor-text focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                      placeholder="Data do Sorteio"
                    />

                    <label className="text-sm text-gray-700 mb-1 mt-2 block">
                      Número do Concurso
                    </label>
                    <input
                      className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2 text-left cursor-text focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                      placeholder="Número Sorteado"
                    />
                  </div>

                  <div className="flex bg-gray-50 px-5 py-3 justify-end">
                    <Button
                      icon={<GiftIcon />}
                      loading={loading}
                      onClick={() => {}}
                    >
                      SORTEAR
                    </Button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </Fragment>
  );
}
