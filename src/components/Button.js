export default function Button({
  scheme = "green",
  size = "md",
  spacing = "none",
  full = false,
  loading,
  onClick,
  disabled,
  icon,
  children,
  ...rest
}) {
  return (
    <button
      className={`btn ${
        scheme === "green" ? "bg-green-500" : "bg-orange-500"
      } text-white ${
        (size === "xs" && "px-2 py-1 text-xs") ||
        (size === "sm" && "px-3 py-2 text-sm") ||
        (size === "md" && "px-4 py-2 text-md") ||
        (size === "lg" && "px-5 py-3 text-lg")
      } rounded-md flex justify-center items-center ${
        full ? "w-full" : "w-fit"
      } ${scheme === "green" ? "hover:bg-green-600" : "hover:bg-orange-600"} ${
        (spacing === "none" && "my-0") ||
        (spacing === "sm" && "my-3") ||
        (spacing === "md" && "my-5") ||
        (spacing === "lg" && "my-10")
      } ${
        loading &&
        `cursor-not-allowed opacity-60 hover:${
          scheme === "green" ? "bg-green-500" : "bg-orange-500"
        }`
      } ${
        disabled &&
        `cursor-not-allowed opacity-60 hover:${
          scheme === "green" ? "bg-green-500" : "bg-orange-500"
        }`
      } ${scheme === "green" ? "active:bg-green-500" : "active:bg-orange-500"}`}
      {...rest}
    >
      {icon ? (
        <div
          className={`${
            (size === "xs" && "w-4 h-4") ||
            (size === "sm" && "w-5 h-5") ||
            (size === "md" && "w-5 h-5") ||
            (size === "lg" && "w-6 h-6")
          }`}
        >
          {loading ? (
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 128 128"
              className="animate-spin"
            >
              <path
                fill="#fff"
                d="M64.4 16a49 49 0 0 0-50 48 51 51 0 0 0 50 52.2 53 53 0 0 0 54-52c-.7-48-45-55.7-45-55.7s45.3 3.8 49 55.6c.8 32-24.8 59.5-58 60.2-33 .8-61.4-25.7-62-60C1.3 29.8 28.8.6 64.3 0c0 0 8.5 0 8.7 8.4 0 8-8.6 7.6-8.6 7.6z"
              ></path>
            </svg>
          ) : (
            icon
          )}
        </div>
      ) : (
        ""
      )}
      <span className={`${icon && "ml-2"} font-semibold`}>{children}</span>
    </button>
  );
}
