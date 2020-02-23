# CEBROKER - API - DOC

## Parametros

Para buscar cursos en el endopoint "offering" se aceptan los siguientes parametros:

|      KEY     |    VALUE   |                   DESCRIPTION                   |
|:------------:|:----------:|:-----------------------------------------------:|
|    expand    | totalItems | Valor por defecto para mostrar todos los cursos |
|   pageIndex  |      1     |             Primer pagina a mostrar             |
|   pageSize   |     10     |         Cantidad de filas en una pagina         |
|   sortField  |  RELEVANCE |              Filtro segun criterio              |
|  profession  |     36     |                Id de la profesion               |
|  courseType  | CD_ANYTIME |      Tipo de curso por defecto (CD_ANYTIME)     |
| deliveryType |     IDN    |                     Opcional                    |
|  subjectArea |    4962    |                     Opcional                    |
|  isFeatured  |    true    |            Destacado o no (Opcional)            |
|     state    |     FL     |                Estado o provincia               |
|     term     |   Family   |          Termino de busqueda (Opcional)         |


> endpoint: https://api.courses.cebroker.com/offerings

Los siguientes items describen cada parametro de busqueda para los cursos:

### Locations (states)
Consulta los estados de US habilitados para cebroker.

  ```sh
    curl https://api.courses.cebroker.com/states
  ```

### Professions
Consulta las profesiones por estado habilitados por cebroker.

  ```sh
    curl https://api.courses.cebroker.com/professions?stateCode=FL
  ```

### General (courses)
Consulta los cursos disponibles en cebroker, estos deben ir limitados a los parametros de busqueda "locations" y "professions".

  ```sh
    curl https://api.courses.cebroker.com/offerings
  ```

### Filters
Course type, delivery type and subcjet area:

  * https://api.courses.cebroker.com/course-types?professionId=36
  * https://api.courses.cebroker.com/delivery-methods?professionId=36&courseType=CD_ANYTIME
  * https://api.courses.cebroker.com/subject-areas?professionId=4396&isAvailableInCourseSearch=true

### Sort Field

El parametro "sort field" acepta los siguientes valores:

| KEY(SORT_FIELD) |
|:---------------:|
|    RELEVANCE    |
|    POPULARITY   |
|     CE_HOURS    |
|   COURSE_NAME   |
|      PRICE      |


### Search Term

En el termino de busqueda el parametro debe usarse con la libreria query-string. 

Por ejemplo:

#### bad
> &term=term1 term2

#### good
> &term=term1%20term2

## Example

Search with all params => https://api.courses.cebroker.com/offerings?expand=totalItems&pageIndex=1&pageSize=7&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&isFeatured=true&state=FL&term=violence
