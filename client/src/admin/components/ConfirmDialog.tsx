interface ConfirmDialogProps {
  title: string;
  description: string;
}

export default function ConfirmDialog({
  title,
  description,
}: ConfirmDialogProps) {
  return (
    <div className="rounded-2xl border border-line bg-bg p-5">
      <h3 className="font-black text-text">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-text">{description}</p>
      <div className="mt-5 flex gap-2">
        <button className="rounded-xl bg-rose-600 px-4 py-2 text-sm font-bold text-text">
          تأیید
        </button>
        <button className="rounded-xl border border-line px-4 py-2 text-sm font-bold text-text">
          انصراف
        </button>
      </div>
    </div>
  );
}
