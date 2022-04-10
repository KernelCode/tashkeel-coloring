import React from "react";

function ColorPoem(props) {
  const arabicletters = [
    "ا",
    "ب",
    "ت",
    "ث",
    "ج",
    "ح",
    "خ",
    "د",
    "ذ",
    "ر",
    "ز",
    "س",
    "ش",
    "ص",
    "ض",
    "ط",
    "ظ",
    "ع",
    "غ",
    "ف",
    "ق",
    "ك",
    "ل",
    "م",
    "ن",
    "ه",
    "و",
    "ي",
    "ى",
    "ئ",
    "ء",
    "ؤ",
    "إ",
    "أ",
    "آ",
    "ة",
  ];

  return (
    <>
      {props.poem &&
        props.poem
          .trim()
          .split("")
          .map((t) => {
            if (arabicletters.includes(t) || t == "ـ") return t;

            return (
              <span style={{ color: props.color || "red", fontWeight: 100 }}>
                {t}
              </span>
            );
          })}
    </>
  );
}

export default ColorPoem;
