import { NextResponse } from "next/server";
import { faker } from "@faker-js/faker";

function getUsername(firstName, lastName) {
  // Prefer new API if present, else fallback to old API. [1][5]
  if (typeof faker.internet?.username === "function") {
    return faker.internet.username({ firstName, lastName });
  }
  if (typeof faker.internet?.userName === "function") {
    return faker.internet.userName({ firstName, lastName });
  }
  // Final fallback: simple join. [1]
  return `${firstName}.${lastName}`.toLowerCase();
}

function createRandomUser(id) {
  const firstName = faker.person.firstName(); // [2]
  const lastName = faker.person.lastName(); // [2]
  const username = getUsername(firstName, lastName); // [1][5]

  const address1 = faker.location.streetAddress(); // [2]
  const address2 =
    faker.helpers.maybe(() => faker.location.secondaryAddress(), {
      probability: 0.5,
    }) ?? null; // [2]
  const city = faker.location.city(); // [2]
  const country = faker.location.country(); // [2]
  const state = faker.location.state(); // [2]
  const pincode = faker.location.zipCode(); // [2]

  const brand = faker.helpers.arrayElement(["Visa", "Mastercard", "Amex"]); // [2]
  const number =
    brand === "Visa"
      ? faker.finance.creditCardNumber({ issuer: "visa" })
      : brand === "Mastercard"
      ? faker.finance.creditCardNumber({ issuer: "mastercard" })
      : faker.finance.creditCardNumber({ issuer: "american_express" }); // [2]
  const expiry = faker.date.future({ years: 4 }).toLocaleDateString("en-GB", {
    month: "2-digit",
    year: "2-digit",
  }); // [2]
  const cvv =
    brand === "Amex"
      ? faker.string.numeric({ length: 4 })
      : faker.string.numeric({ length: 3 }); // [2]

  return {
    id,
    username,
    firstName,
    lastName,
    address1,
    address2,
    city,
    country,
    state,
    pincode,
    creditCard: { brand, number, expiry, cvv },
  };
}

export function GET(request) {
  const sp = new URL(request.url).searchParams;
  const raw = sp.get("count");
  const parsed = raw ? Number(raw) : NaN;
  const count = Number.isFinite(parsed) ? Math.max(1, Math.trunc(parsed)) : 10;

  const users = Array.from({ length: count }, (_, i) =>
    createRandomUser(i + 1)
  ); // [2]
  return NextResponse.json({ count, users }); // [10]
}
