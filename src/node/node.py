import abc

from optional import Optional


class Node[T](abc.ABC):
    @abc.abstractmethod
    def value(self) -> Optional[T]: ...

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
