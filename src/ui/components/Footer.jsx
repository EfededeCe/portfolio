export const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - Creado por Federico del Corro
        </p>
        <p>
          Este portafolio lo hice utilizando las tecnologías Next.js con vanilla
          JS, Tailwind y DaisyUI
        </p>
      </aside>
    </footer>
  );
};
