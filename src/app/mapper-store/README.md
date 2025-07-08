## Data for Mapper-Store

The **datasource** for the `mapper-store` has been included here for now. However, this component adheres to the **Clean Architecture** principles and should eventually be placed within the appropriate layer.

### Clean Architecture Context

- **Domain Layer**: Defines the core business logic and entities.
- **Use Case/Application Layer**: Contains application-specific logic, including interfaces used by the domain.
- **Interface Adapter Layer**: Includes mappers, controllers, presenters, and gateways that convert data between layers.
- **Infrastructure Layer**: Contains frameworks and tools like the data store implementation.
