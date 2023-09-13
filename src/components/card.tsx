export default function Card({content_text,title}:any) {
  return (
    <>
      <div className=" w-full rounded overflow-hidden shadow-lg pt-5">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base ">
            {content_text}
          </p>
        </div>
      </div>
    </>
  );
}
