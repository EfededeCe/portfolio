export const Divider = ({ id, text }) => {
  return (
    <div id={id} className="flex w-full flex-col border-opacity-50 pt-28">
      <div className="divider divider-secondary mx-4 md:mx-32">
        <h3 className="font-extrabold text-slate-100 border border-secondary rounded-full px-4">
          {text}
        </h3>
      </div>
    </div>
  );
};
