
const swaggerDocumentacion = {
    definition: {
        openapi: "3.0.0",
    info: {
      title: "API de Motocicletas Honda",
      description: "API para gestionar datos de motocicletas Honda",
      version: "1.0.0",
    },
    servers: [
        {
          url: "http://localhost:5200",
          description: "URL de la API",
        },
      ],
      paths: {
        "/honda/get": {
          get: {
            summary: "Obtener todas las motos de la colección de Honda",
            description: "Devuelve todas las motocicletas registradas en la colección de Honda.",
            tags: ["Honda"],
            responses: {
              "200": {
                description: "Exito",
                content: {
                  "application/json": {
                    schema: {
                      type: "array",
                      items: {
                        $ref: "#/components/schemas/MotoHonda"
                      }
                    }
                  }
                }
              },
              "404": {
                description: "El servidor fallara y se tendra que iniciar de nuevo",
              }
            }
          }
        },
        "/honda/post": {
          post: {
            summary: "Ingresar una nueva moto a la colección de Honda",
            description: "Crea una nueva motocicleta Honda.",
            tags: ["Honda"],
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/MotoHonda"
                  }
                }
              }
            },
            responses: {
              "201": {
                description: "Motocicleta Honda creada exitosamente",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/MotoHonda"
                    }
                  }
                }
              }
            }
          }
        },
        "/honda/del/{id}": {
          delete: {
            summary: "Eliminar una motocicleta Honda por ID",
            description: "Elimina una motocicleta Honda de la base de datos por su ID único.",
            tags: ["Honda"],
            parameters: [
              {
                in: "path",
                name: "id",
                required: true,
                schema: {
                  type: "string",
                  format: "objectId"
                },
                description: "El ID único de la motocicleta Honda a eliminar"
              }
            ],
            responses: {
              "204": {
                description: "Motocicleta eliminada exitosamente"
              }
            }
          }
        },
        "/honda/put/{id}": {
          put: {
            summary: "Actualizar una motocicleta Honda por ID",
            description: "Actualiza una motocicleta Honda en la base de datos por su ID único.",
            tags: ["Honda"],
            parameters: [
              {
                in: "path",
                name: "id",
                required: true,
                schema: {
                  type: "string",
                  format: "objectId"
                },
                description: "El ID único de la motocicleta Honda a actualizar"
              }
            ],
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/MotoHonda"
                  }
                }
              }
            },
            responses: {
              "200": {
                description: "Motocicleta Honda actualizada exitosamente",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/MotoHonda"
                    }
                  }
                }
              }
            }
          }
        },
        "/kawasaki/get": {
            get: {
              summary: "Obtener todas las motos de la colección de Kawasaki",
              description: "Devuelve todas las motocicletas registradas en la colección de Kawasaki.",
              tags: ["Kawasaki"],
              responses: {
                "200": {
                  description: "Exito",
                  content: {
                    "application/json": {
                      schema: {
                        type: "array",
                        items: {
                          $ref: "#/components/schemas/MotoKawasaki"
                        }
                      }
                    }
                  }
                },
                "404": {
                  description: "El servidor fallara y se tendra que iniciar de nuevo",
                }
              }
            }
          },
          "/kawasaki/post": {
            post: {
              summary: "Ingresar una nueva moto a la colección de kawasaki",
              description: "Crea una nueva motocicleta kawasaki.",
              tags: ["Kawasaki"],
              requestBody: {
                required: true,
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/MotoKawasaki"
                    }
                  }
                }
              },
              responses: {
                "201": {
                  description: "Motocicleta Kawasaki creada exitosamente",
                  content: {
                    "application/json": {
                      schema: {
                        $ref: "#/components/schemas/MotoKawasaki"
                      }
                    }
                  }
                }
              }
            }
          },
          "/kawasaki/del/{id}": {
            delete: {
              summary: "Eliminar una motocicleta kawasaki por ID",
              description: "Elimina una motocicleta kawasaki de la base de datos por su ID único.",
              tags: ["Kawasaki"],
              parameters: [
                {
                  in: "path",
                  name: "id",
                  required: true,
                  schema: {
                    type: "string",
                    format: "objectId"
                  },
                  description: "El ID único de la motocicleta Kawasaki a eliminar"
                }
              ],
              responses: {
                "204": {
                  description: "Motocicleta eliminada exitosamente"
                }
              }
            }
          },
          "/kawasaki/put/{id}": {
            put: {
              summary: "Actualizar una motocicleta kawasaki por ID",
              description: "Actualiza una motocicleta kawasaki en la base de datos por su ID único.",
              tags: ["Kawasaki"],
              parameters: [
                {
                  in: "path",
                  name: "id",
                  required: true,
                  schema: {
                    type: "string",
                    format: "objectId"
                  },
                  description: "El ID único de la motocicleta kawasaki a actualizar"
                }
              ],
              requestBody: {
                required: true,
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/MotoKawasaki"
                    }
                  }
                }
              },
              responses: {
                "200": {
                  description: "Motocicleta kawasaki actualizada exitosamente",
                  content: {
                    "application/json": {
                      schema: {
                        $ref: "#/components/schemas/MotoKawasaki"
                      }
                    }
                  }
                }
              }
            }
          },
          "/yamaha/get": {
            get: {
              summary: "Obtener todas las motos de la colección de Yamaha",
              description: "Devuelve todas las motocicletas registradas en la colección de Yamaha.",
              tags: ["Yamaha"],
              responses: {
                "200": {
                  description: "Exito",
                  content: {
                    "application/json": {
                      schema: {
                        type: "array",
                        items: {
                          $ref: "#/components/schemas/MotoYamaha"
                        }
                      }
                    }
                  }
                },
                "404": {
                  description: "El servidor fallara y se tendra que iniciar de nuevo",
                }
              }
            }
          },
          "/yamaha/post": {
            post: {
              summary: "Ingresar una nueva moto a la colección de Yamaha",
              description: "Crea una nueva motocicleta Yamaha.",
              tags: ["Yamaha"],
              requestBody: {
                required: true,
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/MotoYamaha"
                    }
                  }
                }
              },
              responses: {
                "201": {
                  description: "Motocicleta Kawasaki creada exitosamente",
                  content: {
                    "application/json": {
                      schema: {
                        $ref: "#/components/schemas/MotoYamaha"
                      }
                    }
                  }
                }
              }
            }
          },
          "/yamaha/del/{id}": {
            delete: {
              summary: "Eliminar una motocicleta Yamaha por ID",
              description: "Elimina una motocicleta Yamaha de la base de datos por su ID único.",
              tags: ["Yamaha"],
              parameters: [
                {
                  in: "path",
                  name: "id",
                  required: true,
                  schema: {
                    type: "string",
                    format: "objectId"
                  },
                  description: "El ID único de la motocicleta Yamaha a eliminar"
                }
              ],
              responses: {
                "204": {
                  description: "Motocicleta eliminada exitosamente"
                }
              }
            }
          },
          "/yamaha/put/{id}": {
            put: {
              summary: "Actualizar una motocicleta Yamaha por ID",
              description: "Actualiza una motocicleta Yamaha en la base de datos por su ID único.",
              tags: ["Yamaha"],
              parameters: [
                {
                  in: "path",
                  name: "id",
                  required: true,
                  schema: {
                    type: "string",
                    format: "objectId"
                  },
                  description: "El ID único de la motocicleta Yamaha a actualizar"
                }
              ],
              requestBody: {
                required: true,
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/MotoYamaha"
                    }
                  }
                }
              },
              responses: {
                "200": {
                  description: "Motocicleta Yamaha actualizada exitosamente",
                  content: {
                    "application/json": {
                      schema: {
                        $ref: "#/components/schemas/MotoYamaha"
                      }
                    }
                  }
                }
              }
            }
          },
          "/suzuki/get": {
            get: {
              summary: "Obtener todas las motos de la colección de Suzuki",
              description: "Devuelve todas las motocicletas registradas en la colección de Suzuki.",
              tags: ["Suzuki"],
              responses: {
                "200": {
                  description: "Exito",
                  content: {
                    "application/json": {
                      schema: {
                        type: "array",
                        items: {
                          $ref: "#/components/schemas/MotoSuzuki"
                        }
                      }
                    }
                  }
                },
                "404": {
                  description: "El servidor fallara y se tendra que iniciar de nuevo",
                }
              }
            }
          },
          "/suzuki/post": {
            post: {
              summary: "Ingresar una nueva moto a la colección de Suzuki",
              description: "Crea una nueva motocicleta Suzuki.",
              tags: ["Suzuki"],
              requestBody: {
                required: true,
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/MotoSuzuki"
                    }
                  }
                }
              },
              responses: {
                "201": {
                  description: "Motocicleta Suzuki creada exitosamente",
                  content: {
                    "application/json": {
                      schema: {
                        $ref: "#/components/schemas/MotoSuzuki"
                      }
                    }
                  }
                }
              }
            }
          },
          "/suzuki/del/{id}": {
            delete: {
              summary: "Eliminar una motocicleta Suzuki por ID",
              description: "Elimina una motocicleta Suzuki de la base de datos por su ID único.",
              tags: ["Suzuki"],
              parameters: [
                {
                  in: "path",
                  name: "id",
                  required: true,
                  schema: {
                    type: "string",
                    format: "objectId"
                  },
                  description: "El ID único de la motocicleta Suzuki a eliminar"
                }
              ],
              responses: {
                "204": {
                  description: "Motocicleta eliminada exitosamente"
                }
              }
            }
          },
          "/suzuki/put/{id}": {
            put: {
              summary: "Actualizar una motocicleta Suzuki por ID",
              description: "Actualiza una motocicleta Suzuki en la base de datos por su ID único.",
              tags: ["Suzuki"],
              parameters: [
                {
                  in: "path",
                  name: "id",
                  required: true,
                  schema: {
                    type: "string",
                    format: "objectId"
                  },
                  description: "El ID único de la motocicleta Suzuki a actualizar"
                }
              ],
              requestBody: {
                required: true,
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/MotoSuzuki"
                    }
                  }
                }
              },
              responses: {
                "200": {
                  description: "Motocicleta Suzuki actualizada exitosamente",
                  content: {
                    "application/json": {
                      schema: {
                        $ref: "#/components/schemas/MotoSuzuki"
                      }
                    }
                  }
                }
              }
            }
          },
      },
      components: {
        schemas: {
          MotoHonda: {
            type: "object",
            properties: {
              modelo: {
                type: "string",
                description: "El modelo que tiene la motocicleta",
                example: "CBR 650"
              },
              tipo: {
                type: "string",
                format: "objectId",
                description: "El identificador traido de la colección tiposdemotos",
                example: "651c140cdbe082819d02dd06"
              },
              cuerpodeaceleracion: {
                type: "string",
                description: "Si la moto es Fuel Injection o Carburada",
                example: "FI o Carburada"
              },
              abs: {
                type: "string",
                description: "Si la motocicleta tiene ABS",
                example: "Si o No"
              },
              cilindraje: {
                type: "string",
                description: "El cilindraje de la motocicleta",
                example: "649cc"
              },
              descripcion: {
                type: "string",
                description: "La descripción de la motocicleta",
                example: "La Honda CBR 650 es una motocicleta deportiva de la reconocida marca..."
              },
              marca: {
                type: "string",
                description: "La marca de la motocicleta sera el mismo dependiendo la colección",
                example: "Honda"
              },
              imagen: {
                type: "string",
                description: "URL directo de la imagen de la motocicleta",
                example: "https://a5i4f6g5.stackpathcdn.com/images/cms/Nueva-CBR650R-negro.png"
              }
            }
          },
          MotoKawasaki: {
            type: "object",
            properties: {
              modelo: {
                type: "string",
                description: "El modelo que tiene la motocicleta",
                example: "Ninja ZX-6R"
              },
              tipo: {
                type: "string",
                format: "objectId",
                description: "El identificador traido de la colección tiposdemotos",
                example: "651c140cdbe082819d02dd06"
              },
              cuerpodeaceleracion: {
                type: "string",
                description: "Si la moto es Fuel Injection o Carburada",
                example: "FI"
              },
              abs: {
                type: "string",
                description: "Si la motocicleta tiene ABS",
                example: "Si"
              },
              cilindraje: {
                type: "string",
                description: "El cilindraje de la motocicleta",
                example: "636cc"
              },
              descripcion: {
                type: "string",
                description: "La descripción de la motocicleta",
                example: "La Kawasaki Ninja ZX-6R es una motocicleta deportiva de alta gama..."
              },
              marca: {
                type: "string",
                description: "La marca de la motocicleta será la misma para Kawasaki",
                example: "Kawasaki"
              },
              imagen: {
                type: "string",
                description: "URL directo de la imagen de la motocicleta",
                example: "https://aws.kawasaki-la-administration.com//ContentStorage/KLA/ProductTrimGroup/32/58442660-f358-4052-b448-922b994e5772.jpg?w=750"
              }
            }
          },
          MotoYamaha: {
            type: "object",
            properties: {
              modelo: {
                type: "string",
                description: "El modelo que tiene la motocicleta",
                example: "YZF-R6"
              },
              tipo: {
                type: "string",
                format: "objectId",
                description: "El identificador traido de la colección tiposdemotos",
                example: "651c140cdbe082819d02dd06"
              },
              cuerpodeaceleracion: {
                type: "string",
                description: "Si la moto es Fuel Injection o Carburada",
                example: "FI o Carburada"
              },
              abs: {
                type: "string",
                description: "Si la motocicleta tiene ABS",
                example: "Si o No"
              },
              cilindraje: {
                type: "string",
                description: "El cilindraje de la motocicleta",
                example: "599cc"
              },
              descripcion: {
                type: "string",
                description: "La descripción de la motocicleta",
                example: "La Yamaha YZF-R6 es una motocicleta deportiva de alto rendimiento..."
              },
              marca: {
                type: "string",
                description: "La marca de la motocicleta será la misma dependiendo la colección",
                example: "Yamaha"
              },
              imagen: {
                type: "string",
                description: "URL directo de la imagen de la motocicleta",
                example: "https://static.wixstatic.com/media/3104c9_e78e7783b59744eb89b2783b97829941~mv2.jpg/v1/fill/w_500,h_500,al_c,lg_1,q_80,enc_auto/3104c9_e78e7783b59744eb89b2783b97829941~mv2.jpg"
              }
            }
          },
          MotoSuzuki: {
            type: "object",
            properties: {
              modelo: {
                type: "string",
                description: "El modelo que tiene la motocicleta",
                example: "GSX-S750"
              },
              tipo: {
                type: "string",
                format: "objectId",
                description: "El identificador traido de la colección tiposdemotos",
                example: "651c140cdbe082819d02dd06"
              },
              cuerpodeaceleracion: {
                type: "string",
                description: "Si la moto es Fuel Injection o Carburada",
                example: "FI"
              },
              abs: {
                type: "string",
                description: "Si la motocicleta tiene ABS",
                example: "Si"
              },
              cilindraje: {
                type: "string",
                description: "El cilindraje de la motocicleta",
                example: "749cc"
              },
              descripcion: {
                type: "string",
                description: "La descripción de la motocicleta",
                example: "La Suzuki GSX-R750 es una motocicleta deportiva de alto rendimiento..."
              },
              marca: {
                type: "string",
                description: "La marca de la motocicleta será la misma dependiendo la colección",
                example: "Suzuki"
              },
              imagen: {
                type: "string",
                description: "URL directo de la imagen de la motocicleta",
                example: "https://suzuki.com.co/sites/default/files/2023-02/GSX%20S750A%20Negra_0.png"
              }
            }
          }
        }
      }
    },
    apis: [
        "./routes/honda.js"
    ],
  };
  
  export default swaggerDocumentacion;
  

