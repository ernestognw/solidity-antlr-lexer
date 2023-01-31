import fs from "fs";
import { ANTLRInputStream } from "antlr4ts";
import { SolidityLexer } from "./lexer";
import { buildTokenList } from "./tokens";

const lex = async () => {
  const ERC20 = fs.readFileSync(
    "./node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol",
    "utf8"
  );

  const inputStream = new ANTLRInputStream(ERC20);
  const lexer = new SolidityLexer(inputStream);
  console.log(
    buildTokenList(lexer.getAllTokens(), {}).map(({ value }) => value)
  );
};

lex();
