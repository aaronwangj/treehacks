import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      className="btn btn-sm gap-2 border-none rounded-md bg-gradient-to-r from-[#00df16] to-[#08bad2] mb-2"
      onClick={() => navigate(-1)}
    >
      <svg
        viewBox="0 0 1024 1024"
        fill="currentColor"
        height="1.5em"
        width="1.5em"
      >
        <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" />
      </svg>
      Back
    </button>
  );
}
