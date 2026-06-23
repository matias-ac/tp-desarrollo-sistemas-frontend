import { describe, test } from 'node:test';
import assert from 'node:assert/strict';

const esNombreValido = (nombre) => { throw new Error('no implementado') };

describe('tests de la función esNombreValido', () => {

  test('retorna false si recibe un número', () => {
    const nombreIngresado = 2;
    assert(esNombreValido(nombreIngresado)).strictEqual(false);
  });

});


