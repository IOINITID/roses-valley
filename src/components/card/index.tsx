import { css } from "@emotion/css";

export const Card = (props: { url: string; id: number }) => {
  return (
    <div
      className={css`
        position: relative;
      `}
    >
      <iframe
        className={css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
          border-radius: 16px;
          overflow: hidden;
        `}
        src={props.url}
      />
      <div
        className={css`
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 36%;
          background: #403f48;
          border-radius: 0 0 16px 16px;
          overflow: hidden;
          color: #ffffff;
        `}
      >
        <div
          className={css`
            position: absolute;
            left: 16px;
            bottom: 50%;
            transform: translateY(50%);
            background: #53525c;
            padding: 6px 12px;
            border-radius: 6px;
          `}
        >
          Камера {props.id}
        </div>
      </div>
    </div>
  );
};
