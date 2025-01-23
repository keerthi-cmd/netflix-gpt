import ISO6391 from "iso-639-1";
function Modal({ closeModal, id, title, overview, language, releaseDate }) {
  function handleClick() {
    closeModal();
  }

  function closeModalBgClick(e) {
    if (e.target.id === "modal-bg") {
      closeModal();
    }
  }
  const getLanguageName = (code) => {
    return ISO6391.getName(code) || "Unknown Language";
  };

  return (
    <div
      id="modal-bg"
      className="fixed top-0 left-0 w-screen h-screen bg-zinc-700/50 flex flex-col justify-center items-center text-black"
      onClick={closeModalBgClick}
    >
      <div className="bg-white md:w-6/12 w-10/12 max-w-screen-md rounded-lg p-4 m-4 flex flex-col relative shadow-2xl">
        <a
          onClick={closeModal}
          className="absolute text-2xl right-5 hover:cursor-pointer"
        >
          x
        </a>
        <h1 className="text-3xl pb-8">{title}</h1>
        <p className="italic text- pb-4">{overview}</p>
        <div className="flex">
          <h2 className="font-bold pr-8">Language:</h2>
          <p className="">{getLanguageName(language)}</p>
        </div>
        <div className="flex">
          <h2 className="font-bold pr-4">ReleaseDate:</h2>
          <p className="">{releaseDate}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
