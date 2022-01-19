import Header from "../components/Header";
import {
  PhotographIcon,
  PlusIcon,
  SaveIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import InputMask from "react-input-mask";
import Button from "../components/Button";
import { useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import DialogApp from "../components/Dialog";
import api from "../configs/axios";

export default function NovaRifa() {
  const { r } = useParams();

  const [dialog, setDialog] = useState({});
  const [spinner, setSpinner] = useState(false);
  const [client, setClient] = useState({});

  const [name, setName] = useState("");
  const [qtd_numbers, setQtd_numbers] = useState("");
  const [raffle_value, setRaffle_value] = useState("");
  const [date, setDate] = useState("");
  const [schedule, setSchedule] = useState("");
  const [goal, setGoal] = useState("");
  const [description, setDescription] = useState("");
  const [trophys, setTrophys] = useState([]);
  const [trophy, setTrophy] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [trophyName, setTrophyName] = useState("");

  const previewThumbnail = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function removeThumbnail() {
    await URL.revokeObjectURL(thumbnail);
    setThumbnail(null);
  }

  const handleDialog = (open, title, message, type) => {
    setDialog({ open, title, message, type });
  };

  useEffect(() => {
    async function findPetition() {
      setSpinner(true);
      try {
        const response = await api.get(`/findPetitionByIdentify/${r}`);
        console.log(response.data);
        setClient(response.data.client);
        setName(response.data.petition.name);
        setQtd_numbers(response.data.petition.qtd_numbers);
        setRaffle_value(response.data.petition.raffle_value);
        setDate(response.data.petition.draw_date);
        setSchedule(response.data.petition.draw_time);
        setGoal(response.data.petition.goal);
        setDescription(response.data.petition.description);
        setTrophy(response.data.petition.trophies);
        setSpinner(false);
      } catch (error) {
        setSpinner(false);
        const err =
          error.response.data.message ||
          "Ocorreu um erro ao processar a requisição";
        handleDialog(true, "Ocorreu um erro", err, "error");
      }
    }
    findPetition();
  }, [r]);

  function handleTrophyName() {
    const result = trophys.find((obj) => obj === trophyName);
    if (result) {
      handleDialog(true, "Atenção", "O prêmio já foi inserido", "warning");
      return false;
    }
    setTrophys([...trophys, trophyName]);
    setTrophyName("");
  }

  function removeTrophy(ind) {
    const tros = trophys.filter((obj) => obj !== ind);
    setTrophys(tros);
  }

  return (
    <>
      <Header icon={<SaveIcon />} title={"CRIAR RIFA"} />

      <div
        className={`pt-20 px-3 pb-3 overflow-auto max-h-full ${
          spinner && "animate-pulse overflow-hidden"
        }`}
      >
        <div className="grid grid-cols-5 gap-5">
          <div className="bg-white rounded-md shadow-md p-2 h-fit">
            <span className="text-sm text-gray-700 mb-2 block">
              Imagem da Rifa
            </span>
            {thumbnail ? (
              <div className="w-full h-40 overflow-hidden rounded-md relative">
                <img
                  src={previewThumbnail}
                  alt="PA Rifas"
                  className="w-full h-40 object-cover"
                />
                <div className="flex justify-center z-30 -m-10">
                  <button
                    className="btn rounded-full p-2 bg-red-600 text-white bg-opacity-90 shadow-md hover:bg-red-700 active:bg-red-600"
                    onClick={() => removeThumbnail()}
                  >
                    <TrashIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              <label
                className="h-40 flex justify-center items-center flex-col border border-green-500 rounded-md border-dashed cursor-pointer hover:border-2"
                htmlFor="thumbnail"
              >
                <input
                  className="sr-only"
                  id="thumbnail"
                  type={"file"}
                  onChange={(event) => setThumbnail(event.target.files[0])}
                />
                <PhotographIcon className="w-10 h-10" />
                <span className="text-gray-700 text-sm text-center">
                  Insira uma imagem para a rifa
                </span>
              </label>
            )}
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
                  value={name}
                  onChange={(e) => setName(e.target.value.toUpperCase())}
                />
              </div>
              <div className="w-full">
                <label className="text-sm text-gray-700 mb-2 block">
                  Qtd. Números
                </label>
                <input
                  className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2 text-left cursor-text focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="Quantidade de Números"
                  value={qtd_numbers}
                  type={"number"}
                  onChange={(e) => setQtd_numbers(e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-5 mt-3">
              <div className="w-full">
                <label className="text-sm text-gray-700 mb-2 block">
                  Valor da Cota
                </label>
                <input
                  className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2 text-left cursor-text focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="Valor da Cota"
                  value={raffle_value}
                  type={"number"}
                  onChange={(e) => setRaffle_value(e.target.value)}
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
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
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
                  value={schedule}
                  onChange={(e) => setSchedule(e.target.value)}
                />
              </div>
              <div className="w-full">
                <label className="text-sm text-gray-700 mb-2 block">
                  Meta Mínima
                </label>
                <input
                  className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2 text-left cursor-text focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="Valor da Cota"
                  maxLength={3}
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
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
                value={client.name || ""}
                readOnly
              />
            </div>
            <div className="grid grid-cols-3 gap-5 mt-3">
              <div className="w-full">
                <label className="text-sm text-gray-700 mb-2 block">CPF</label>
                <InputMask
                  mask={"999.999.999-99"}
                  className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2 text-left cursor-text focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="CPF"
                  value={client.cpf || ""}
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
                  readOnly
                  value={client.phone || ""}
                />
              </div>
              <div className="w-full">
                <label className="text-sm text-gray-700 mb-2 block">
                  Email (Opcional)
                </label>
                <input
                  className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2 text-left cursor-text focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="Email (Opcional)"
                  readOnly
                  value={client.email || ""}
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
                value={description}
                onChange={(e) => setDescription(e.target.value.toUpperCase())}
              />
            </div>

            <div className="w-full mt-1 grid grid-cols-4 gap-5">
              <div className="w-full">
                <label className="text-sm text-gray-700 mb-2 block">
                  Prêmios
                </label>
                <input
                  className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2 text-left cursor-text focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm mb-2"
                  placeholder="Prêmio"
                  value={trophyName}
                  onChange={(e) => setTrophyName(e.target.value.toUpperCase())}
                />
                <Button
                  size="sm"
                  full={true}
                  icon={<PlusIcon />}
                  scheme="orange"
                  onClick={() => handleTrophyName()}
                >
                  Adicionar
                </Button>
              </div>
              <div className="grid col-span-3 grid-cols-3 gap-5">
                {trophys.map((tro) => (
                  <div
                    className="bg-gray-200 rounded-md p-2 flex justify-between items-center h-fit text-sm"
                    key={tro}
                  >
                    <div className="w-full">
                      <span className="block font-semibold">
                        {trophys.findIndex((obj) => obj === tro) + 1}º Prêmio
                      </span>
                      <span className="block">{tro}</span>
                    </div>
                    <button
                      className="btn bg-red-500 rounded-full p-2 cursor-pointer ml-2 hover:bg-red-600 active:bg-red-500 shadow-sm"
                      onClick={() => removeTrophy(tro)}
                    >
                      <TrashIcon className="w-4 h-4 text-gray-100" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <span className="text-sm block mt-3 text-red-600">
              {trophy && `* ${trophy}`}
            </span>

            <div className="flex justify-end border-t mt-5 pt-5">
              <Button size="lg" icon={<SaveIcon />}>
                CRIAR RIFA
              </Button>
            </div>
          </div>
        </div>
      </div>

      <DialogApp
        onClose={() => setDialog({})}
        open={dialog.open || false}
        title={dialog.title || ""}
        message={dialog.message || ""}
        type={dialog.type}
      />
    </>
  );
}
