"""
JYU 2do Course project
===========================
"""

from importlib_metadata import (PackageNotFoundError,
                                version)

try:
    __version__ = version(__name__)
except PackageNotFoundError:
    __version__ = "unknown"