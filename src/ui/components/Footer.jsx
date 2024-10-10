export const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - Creado por Federico del Corro
        </p>
        <p>
          Este portafolio fue realizado utilizando Next.js, Tailwind y DaisyUI
        </p>
      </aside>
    </footer>
  );
};
