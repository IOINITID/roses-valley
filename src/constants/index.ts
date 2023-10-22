export const cameras = [1, 2, 6, 13, 20, 28, 29];

export const getVideoURL = (cameraId: string, token: string) =>
  `https://video.telko.ru/vsaas/embed/${cameraId}?token=${token}`;

export const videos = [
  {
    id: 1,
    cameraId: "tlk1002978_cam2-613cfe2dff",
    token: "3.n3FvNQCeAAAAAAAAA7IABfrzV232F10ilzQ8PvekON_khEypd_hIrvnO",
  },
  {
    id: 2,
    cameraId: "tlk1002978_cam5-d30d506142",
    token: "3.n3FvNQCeAAAAAAAAA7IABfrzV232F8ZLbFZIqSyG4bbDMoom5NrK0acB",
  },
  {
    id: 6,
    cameraId: "tlk1002978_cam12-6e7b2f1bb5",
    token: "3.n3FvNQCeAAAAAAAAA7IABfrzV232F_FME2KpqkHs8NOmOsi1q_oA8fNf",
  },
  {
    id: 13,
    cameraId: "tlk1002978_cam2-b8f967277c",
    token: "3.n3FvNQCeAAAAAAAAA7IABfrzV232F3JAU48gJpBzLe7fUTR1LCcrnVXk",
  },
  {
    id: 20,
    cameraId: "tlk1002978_cam34-c43c5928de",
    token: "3.n3FvNQCeAAAAAAAAA7IABfrzV232F2qyMdlq-k3B56N55tIhX4EW8GE6",
  },
  {
    id: 28,
    cameraId: "tlk1002978_cam10-3cf0772ede",
    token: "3.n3FvNQCeAAAAAAAAA7IABfrzV232F3p1p9GXM-4R5B_KAMEIUna28VvN",
  },
  {
    id: 29,
    cameraId: "tlk1002978_cam23-1daddcbfb2",
    token: "3.n3FvNQCeAAAAAAAAA7IABfrzV232F2CCzk9Xh3CvUA0Cd66SlnYsc8Ru",
  },
];
