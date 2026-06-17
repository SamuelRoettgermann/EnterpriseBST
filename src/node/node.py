import abc



class Node[T](abc.ABC):
    @property
    @abc.abstractmethod
    def value(self) -> T: ...

    @property
    @abc.abstractmethod
    def smaller(self) -> "Node[T]": ...

    @property
    @abc.abstractmethod
    def larger(self) -> "Node[T]": ...

    @abc.abstractmethod
    def insert(self, value: T) -> "Node[T]": ...

    @abc.abstractmethod
    def search(self, value: T) -> bool: ...

    @abc.abstractmethod
    def remove(self, value: T) -> "Node[T]": ...

    @abc.abstractmethod
    def __len__(self) -> int: ...

    @abc.abstractmethod
    def _pretty_print(
        self, prefix: str = "", is_left: bool = False, is_root: bool = False
    ) -> list[str]: ...

    @abc.abstractmethod
    def is_leaf(self) -> bool: ...
