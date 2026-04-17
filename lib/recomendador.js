export function recomendarCrepa(preferencia) {
  preferencia = preferencia.toLowerCase();

  if (preferencia.includes("chocolate")) {
    return "Te recomiendo una crepa de Nutella con plátano 🍫🍌";
  }

  if (preferencia.includes("fruta")) {
    return "Te recomiendo una crepa de fresa con crema 🍓";
  }

  if (preferencia.includes("dulce")) {
    return "Te recomiendo una crepa de cajeta con nuez 🥞";
  }

  if (preferencia.includes("ligero")) {
    return "Te recomiendo una crepa con frutas frescas 🍇🍓";
  }

  return "Te recomiendo una crepa clásica de Nutella 🍫";
}